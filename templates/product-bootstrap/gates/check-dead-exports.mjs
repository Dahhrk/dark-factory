#!/usr/bin/env node
/**
 * Dead export detection: find exports in src/ that nothing imports.
 *
 * Walks all ts/tsx files, collects every named export and every import,
 * then reports exports with zero consumers.
 *
 * Ignores:
 *  - index.ts re-exports (public API barrels)
 *  - Types (type-only exports)
 *  - Default exports from entry files (App.tsx, main.tsx)
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

const ENTRY_FILES = new Set(["App.tsx", "main.tsx"]);

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

const files = walk(SRC);
const exports = new Map();
const imports = new Set();

const EXPORT_NAME_RE = /export\s+(?:(?:async\s+)?function|const|let|var|class|enum)\s+(\w+)/g;
const EXPORT_TYPE_RE = /export\s+type\s+/;
const IMPORT_RE = /import\s+\{([^}]+)\}\s+from/g;
const IMPORT_DEFAULT_RE = /import\s+(\w+)\s+from/g;
const REEXPORT_NAMED_RE = /export\s+\{([^}]+)\}\s+from\s+["']([^"']+)["']/g;

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  const text = readFileSync(file, "utf8");
  const basename = path.basename(file);
  const isIndex = basename.startsWith("index.");
  const isEntry = ENTRY_FILES.has(basename);

  let m;

  REEXPORT_NAMED_RE.lastIndex = 0;
  while ((m = REEXPORT_NAMED_RE.exec(text)) !== null) {
    for (const name of m[1].split(",")) {
      const clean = name.trim().split(/\s+as\s+/)[0].trim();
      if (clean) imports.add(clean);
    }
  }

  EXPORT_NAME_RE.lastIndex = 0;
  while ((m = EXPORT_NAME_RE.exec(text)) !== null) {
    const line = text.slice(0, m.index);
    if (EXPORT_TYPE_RE.test(line.split("\n").pop() || "")) continue;
    if (!isIndex && !isEntry) {
      const key = `${rel}:${m[1]}`;
      if (!exports.has(m[1])) exports.set(m[1], []);
      exports.get(m[1]).push(key);
    }
  }

  IMPORT_RE.lastIndex = 0;
  while ((m = IMPORT_RE.exec(text)) !== null) {
    for (const name of m[1].split(",")) {
      const clean = name.trim().split(/\s+as\s+/)[0].trim();
      if (clean) imports.add(clean);
    }
  }

  IMPORT_DEFAULT_RE.lastIndex = 0;
  while ((m = IMPORT_DEFAULT_RE.exec(text)) !== null) {
    if (m[1] !== "type") imports.add(m[1]);
  }
}

const dead = [];
for (const [name, locations] of exports) {
  if (!imports.has(name)) {
    for (const loc of locations) {
      dead.push(`${loc} — exported but never imported`);
    }
  }
}

if (dead.length) {
  console.warn(`dead-exports: ${dead.length} unused exports found:\n` + dead.map((d) => `  ${d}`).join("\n"));
  console.warn("\nRemove unused exports or use them. Dead code is agent debt.");
  process.exit(1);
}

console.log(`dead-exports: ok (${exports.size} named exports, all consumed)`);
