#!/usr/bin/env node
// Pack mirror: cursor-team-kit skills are byte-identical twins across the
// two factories. When a skill file differs or exists on one side only, the
// side whose file last changed in git wins; --pr opens a PR on the laggard.
//
//   node scripts/sync-packs.mjs --check   (default: report)
//   node scripts/sync-packs.mjs --write   (mirror locally, no PR)
//   node scripts/sync-packs.mjs --pr      (mirror + open PR on laggard)
//
// Scope is deliberately narrow: pstack files are parallel platform editions
// (drift-check covers their structure), rules/*.mdc differ by format. Only
// committed content counts - uncommitted WIP is never mirrored. Zero deps.
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, relative } from 'node:path';

const args = new Set(process.argv.slice(2));
const P = join(homedir(), 'Projects');
const DEVIN = process.env.DEVIN_FACTORY_REPO || join(P, 'devin-factory-plugins');
const NORMAL = process.env.PLUG_FACTORY_REPO || join(P, 'plug-factory');
const PACK = 'cursor-team-kit';
const SUB = 'skills';
const BRANCH = 'chore/pack-mirror';

const norm = (s) => s.replace(/\r\n/g, '\n');
const run = (cmd, cwd) => execSync(cmd, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const slugOf = (root) => {
  const m = run('git remote get-url origin', root).match(/github\.com[:/]([^/]+\/[^/.]+)/);
  return m && m[1];
};
const lastChange = (root, rel) => {
  try { return Number(run(`git log -1 --format=%ct -- "${rel}"`, root)) || 0; } catch { return 0; }
};

const listSkills = (root, packDir) => {
  const base = join(root, packDir, SUB);
  const out = new Map();
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) { if (!e.name.startsWith('.git')) walk(p); continue; }
      if (e.name.endsWith('.md')) out.set(relative(base, p).replace(/\\/g, '/'), p);
    }
  };
  if (existsSync(base)) walk(base);
  return out;
};

const mine = listSkills(DEVIN, `plugins/${PACK}`);
const theirs = listSkills(NORMAL, PACK);
const dRel = (rel) => `plugins/${PACK}/${SUB}/${rel}`;
const nRel = (rel) => `${PACK}/${SUB}/${rel}`;
const mirrorActions = [];

for (const [rel, abs] of mine) {
  const otherAbs = theirs.get(rel);
  if (!otherAbs) {
    if (lastChange(NORMAL, nRel(rel)) > lastChange(DEVIN, dRel(rel))) continue;
    mirrorActions.push({ rel, toAbs: join(NORMAL, PACK, SUB, rel), fromAbs: abs });
    continue;
  }
  if (norm(readFileSync(abs, 'utf8')) === norm(readFileSync(otherAbs, 'utf8'))) continue;
  mirrorActions.push(lastChange(DEVIN, dRel(rel)) >= lastChange(NORMAL, nRel(rel))
    ? { rel, toAbs: otherAbs, fromAbs: abs }
    : { rel, toAbs: abs, fromAbs: otherAbs });
}
for (const [rel, abs] of theirs) {
  if (mine.has(rel)) continue;
  if (lastChange(DEVIN, dRel(rel)) > lastChange(NORMAL, nRel(rel))) continue;
  mirrorActions.push({ rel, toAbs: join(DEVIN, 'plugins', PACK, SUB, rel), fromAbs: abs });
}

if (!mirrorActions.length) {
  console.log('pack-mirror: skill twins in sync');
  process.exit(0);
}

const targets = new Map();
for (const a of mirrorActions) {
  const toRoot = a.toAbs.startsWith(NORMAL) ? NORMAL : DEVIN;
  if (!args.has('--write') && !args.has('--pr')) {
    console.log(`mirror: ${PACK}/${SUB}/${a.rel} -> ${toRoot === NORMAL ? 'plug-factory' : 'devin-factory-plugins'}`);
    continue;
  }
  if (!targets.has(toRoot)) targets.set(toRoot, []);
  targets.get(toRoot).push(a);
}

for (const [root, list] of targets) {
  const name = root === NORMAL ? 'plug-factory' : 'devin-factory-plugins';
  const slug = slugOf(root);
  const dirty = list.filter((a) => run(`git status --porcelain -- "${relative(root, a.toAbs).replace(/\\/g, '/')}"`, root));
  if (dirty.length) { console.log(`skip ${name}: ${dirty.length} file(s) have uncommitted changes`); continue; }
  if (args.has('--pr')) {
    if (!slug) { console.log(`skip ${name}: no github remote`); continue; }
    const open = JSON.parse(run(`gh pr list --repo ${slug} --head ${BRANCH} --state open --json number`, root) || '[]');
    if (open.length) { console.log(`skip ${name}: mirror PR already open (#${open[0].number})`); continue; }
    run('git fetch -q origin', root);
    run(`git checkout -q -B ${BRANCH} origin/main`, root);
  }
  const rels = [];
  for (const a of list) {
    mkdirSync(dirname(a.toAbs), { recursive: true });
    writeFileSync(a.toAbs, readFileSync(a.fromAbs));
    rels.push(relative(root, a.toAbs).replace(/\\/g, '/'));
  }
  console.log(`mirrored ${rels.length} file(s) into ${name}`);
  if (!args.has('--pr')) continue;
  for (const r of rels) run(`git add "${r}"`, root);
  run(`git commit -q -m "chore(packs): mirror ${rels.length} skill file(s) from twin"`, root);
  run(`git push -q -u origin ${BRANCH}`, root);
  const url = run(`gh pr create --repo ${slug} --head ${slug.split('/')[0]}:${BRANCH} --title "chore(packs): mirror skill files from twin" --body "cursor-team-kit skill files mirrored by sync-packs.mjs (newer side wins per file). Keeps the twin factories drift-clean."`, root);
  run('git checkout -q main', root);
  console.log(`opened ${url}`);
}
if (!args.has('--write') && !args.has('--pr')) process.exit(1);
