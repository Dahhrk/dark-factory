#!/usr/bin/env node
// Upstream pstack watch: reports what changed in github.com/cursor/plugins
// pstack/ recently and which upstream files our pack never carried. Our
// packs intentionally fork upstream prose, so this is a signal report for
// a human or routine to triage - not a diff gate.
//
//   node scripts/upstream-watch.mjs [--days 30] [upstream-clone-path]
//
// Default clone: $PSTACK_UPSTREAM or ~/Projects/cursor-plugins-upstream
// (a clone of https://github.com/cursor/plugins). Missing -> shallow clone
// into temp. Local pack: $PLUG_FACTORY_REPO or ~/Projects/plug-factory.
// Zero deps.

import { execSync } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join, relative } from 'node:path';

const argv = process.argv.slice(2);
const daysIdx = argv.indexOf('--days');
const days = daysIdx >= 0 ? Number(argv[daysIdx + 1]) : 30;
const positional = argv.filter((a, i) => a !== '--days' && i !== daysIdx + 1);

let upstream = positional[0]
	|| process.env.PSTACK_UPSTREAM
	|| join(homedir(), 'Projects', 'cursor-plugins-upstream');
const pack = process.env.PLUG_FACTORY_REPO
	|| join(homedir(), 'Projects', 'plug-factory');

const git = (args, cwd) =>
	execSync(`git ${args}`, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

if (!existsSync(join(upstream, 'pstack'))) {
	const tmp = mkdtempSync(join(tmpdir(), 'pstack-upstream-'));
	console.log(`upstream-watch: no clone at ${upstream}; shallow-cloning to ${tmp}`);
	execSync(`git clone --depth 200 https://github.com/cursor/plugins ${tmp}`, { stdio: 'inherit' });
	upstream = tmp;
} else {
	try { git('fetch --quiet origin', upstream); } catch { /* offline is fine - report on what we have */ }
}

const branch = git('rev-parse --abbrev-ref origin/HEAD', upstream).replace('origin/', '');

const collect = (dir) => {
	const out = new Set();
	const walk = (d) => {
		for (const e of readdirSync(d, { withFileTypes: true })) {
			const p = join(d, e.name);
			if (e.isDirectory()) { if (!e.name.startsWith('.git') && e.name !== 'node_modules') walk(p); continue; }
			out.add(relative(dir, p).replace(/\\/g, '/'));
		}
	};
	walk(dir);
	return out;
};

// 1. Recent upstream commits touching pstack/.
const log = git(`log origin/${branch} --since="${days} days ago" --name-only --pretty=format:"%h %ad %s" --date=short -- pstack/`, upstream);

// 2. Upstream pstack files our pack never carried.
const upFiles = collect(join(upstream, 'pstack'));
const ourFiles = collect(join(pack, 'pstack'));
const missing = [...upFiles].filter((f) => !ourFiles.has(f)).sort();

console.log(`upstream-watch: pstack changes on origin/${branch} in the last ${days} days:`);
console.log(log || '  (none)');
console.log('');
if (missing.length) {
	console.log('upstream files not in our pack:');
	for (const f of missing) console.log(`  ${f}`);
} else {
	console.log('upstream files not in our pack: none');
}
