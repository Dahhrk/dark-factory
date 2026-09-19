#!/usr/bin/env node
// Gate sync: the kitchen's .github/workflows/factory-gate.yml is canonical
// for the shared gate copied into every factory repo.
//
//   node scripts/sync-gates.mjs --check   (default: report divergence)
//   node scripts/sync-gates.mjs --write   (stamp diverged copies locally)
//   node scripts/sync-gates.mjs --pr      (stamp + open a PR per diverged repo)
//
// Skips clones where the gate file is already dirty or a sync PR is open.
// Zero deps.
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const here = process.cwd();
const REL = '.github/workflows/factory-gate.yml';
const BRANCH = 'chore/gate-sync';
const args = new Set(process.argv.slice(2));
const canon = readFileSync(join(here, REL), 'utf8');
const norm = (s) => s.replace(/\r\n/g, '\n');
// runs-on is a per-repo knob (haunt needs the self-hosted runner);
// compare with it masked and preserve the target's own value on stamp.
const RUNS_ON = /^(\s+runs-on:\s*).+$/m;
const comparable = (s) => norm(s).replace(RUNS_ON, '$1<repo>');
const stampFor = (targetPath) => {
  const cur = existsSync(targetPath) ? readFileSync(targetPath, 'utf8') : '';
  const m = cur.match(RUNS_ON);
  return m ? canon.replace(RUNS_ON, m[0].replace(/\r/g, '')) : canon;
};

const repos = (process.env.FACTORY_REPOS || 'devin-factory-plugins,plug-factory,haunt')
  .split(',').map((n) => ({ name: n.trim(), root: join(homedir(), 'Projects', n.trim()) }));

const run = (cmd, cwd) => execSync(cmd, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const slugOf = (root) => {
  const m = run('git remote get-url origin', root).match(/github\.com[:/]([^/]+\/[^/.]+)/);
  return m && m[1];
};

const diverged = [];
for (const { name, root } of repos) {
  const p = join(root, REL);
  if (!existsSync(p) || comparable(readFileSync(p, 'utf8')) !== comparable(canon)) diverged.push({ name, root, p });
}

if (!diverged.length) {
  console.log('gate-sync: all copies match canonical');
  process.exit(0);
}

for (const d of diverged) {
  if (!args.has('--write') && !args.has('--pr')) {
    console.log(`diverged: ${d.name}`);
    continue;
  }
  if (run(`git status --porcelain -- "${REL}"`, d.root)) {
    console.log(`skip ${d.name}: ${REL} has uncommitted changes`);
    continue;
  }
  if (args.has('--pr')) {
    const slug = slugOf(d.root);
    if (!slug) { console.log(`skip ${d.name}: no github remote`); continue; }
    const open = JSON.parse(run(`gh pr list --repo ${slug} --head ${BRANCH} --state open --json number`, d.root) || '[]');
    if (open.length) { console.log(`skip ${d.name}: sync PR already open (#${open[0].number})`); continue; }
    run('git fetch -q origin', d.root);
    run(`git checkout -q -B ${BRANCH} origin/main`, d.root);
  }
  writeFileSync(d.p, stampFor(d.p));
  if (!args.has('--pr')) { console.log(`stamped ${d.name}`); continue; }
  const slug = slugOf(d.root);
  run(`git add "${REL}"`, d.root);
  run('git commit -q -m "chore(gates): sync factory-gate from kitchen canonical"', d.root);
  run(`git push -q -u origin ${BRANCH}`, d.root);
  const url = run(`gh pr create --repo ${slug} --head ${slug.split('/')[0]}:${BRANCH} --title "chore(gates): sync factory-gate from kitchen" --body "Kitchen canonical gate stamped by sync-gates.mjs. Keeps the five gate copies identical."`, d.root);
  run('git checkout -q main', d.root);
  console.log(`opened ${url}`);
}
if (!args.has('--write') && !args.has('--pr')) process.exit(1);
