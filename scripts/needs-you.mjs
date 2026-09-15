#!/usr/bin/env node
// needs-you sweep: human blockers across the fleet, no LLM.
// Reads repo slugs from ~/Projects/registry.md (`github:` lines).
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const registry = join(homedir(), 'Projects', 'registry.md');
const gh = (args) => execSync(`gh ${args}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();

const slugs = [...new Set(
  readFileSync(registry, 'utf8')
    .split('\n')
    .map((l) => l.match(/\*\*github:\*\*\s*`([^`]+)`/)?.[1])
    .filter(Boolean),
)];

const rows = [];
for (const slug of slugs) {
  let prs;
  try {
    prs = JSON.parse(gh(`pr list --repo ${slug} --state open --json number,title,isDraft,url`));
  } catch {
    continue;
  }
  for (const pr of prs) {
    let checks = [];
    try {
      checks = JSON.parse(gh(`pr checks ${pr.number} --repo ${slug} --json name,state,bucket`)) || [];
    } catch {}
    const failing = checks.filter((c) => c.bucket === 'fail');
    if (failing.length)
      rows.push({ slug, item: `#${pr.number} ${pr.title}`, why: `failing: ${failing.map((c) => c.name).join(', ')}`, url: pr.url });
    else if (pr.isDraft)
      rows.push({ slug, item: `#${pr.number} ${pr.title}`, why: 'draft awaiting plate', url: pr.url });
  }
}

const date = new Date().toISOString().slice(0, 10);
const lines = [
  `# needs-you ${date}`,
  '',
  '| repo | item | why | link |',
  '|---|---|---|---|',
  ...rows.map((r) => `| ${r.slug} | ${r.item} | ${r.why} | ${r.url} |`),
  '',
];
const outDir = join(root, 'local');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, `needs-you-${date}.md`), lines.join('\n'));

if (!rows.length) console.log('needs-you: clean');
else {
  console.log(`needs-you: ${rows.length} item(s)`);
  for (const r of rows) console.log(`  ${r.slug} ${r.item} - ${r.why}`);
}
