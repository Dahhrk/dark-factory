#!/usr/bin/env node
/**
 * Barrel re-export detection: ban `export * from` in src/.
 *
 * Barrel re-exports hide coupling and make tree-shaking harder.
 * Agents love them because they're easy. Ban them.
 *
 * Allowed: index.ts files can re-export named exports (export { X } from).
 * Banned: export * from anywhere.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const violations = [];

const BARREL_RE = /export\s+\*\s+from\s+/g;

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === "dist") continue;
      walk(p, files);
    } else if (/\.(ts|tsx)$/.test(name)) {
      files.push(p);
    }
  }
  return files;
}

for (const file of walk(SRC)) {
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (BARREL_RE.test(lines[i])) {
      violations.push(`${rel}:${i + 1}: banned barrel re-export (export * from). Use named exports instead.`);
    }
    BARREL_RE.lastIndex = 0;
  }
}

if (violations.length) {
  console.error("no-barrel-exports failed:\n" + violations.map((v) => `  ${v}`).join("\n"));
  process.exit(1);
}

console.log(`no-barrel-exports: ok (${walk(SRC).length} files scanned)`);
