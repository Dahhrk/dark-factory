#!/usr/bin/env node
/**
 * Import order enforcement: ensure imports follow a consistent order.
 *
 * Order:
 *   1. Node built-ins (node:fs, node:path, etc.)
 *   2. External packages (react, motion, etc.)
 *   3. Internal aliases (@/ imports)
 *   4. Relative imports (./foo, ../bar)
 *
 * Each group should be separated by a blank line.
 * Within a group, imports should be alphabetical.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const violations = [];

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

function classifyImport(spec) {
  if (spec.startsWith("node:")) return 0;
  if (spec.startsWith("./") || spec.startsWith("../")) return 3;
  if (spec.startsWith("@/")) return 2;
  return 1;
}

const IMPORT_LINE_RE = /^import\s+.*\s+from\s+["']([^"']+)["']/;

for (const file of walk(SRC)) {
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  const lines = readFileSync(file, "utf8").split(/\r?\n/);

  let highestGroup = -1;
  let lastGroup = -1;
  let lastSpec = "";
  let importBlockStarted = false;

  for (let i = 0; i < lines.length; i++) {
    const match = IMPORT_LINE_RE.exec(lines[i]);
    if (!match) {
      if (importBlockStarted && lines[i].trim() === "") {
        lastGroup = -1;
        lastSpec = "";
      }
      if (importBlockStarted && lines[i].trim() !== "" && !lines[i].startsWith("import")) {
        break;
      }
      continue;
    }

    importBlockStarted = true;
    const spec = match[1];
    const group = classifyImport(spec);

    if (highestGroup !== -1 && group < highestGroup) {
      violations.push(`${rel}:${i + 1}: import "${spec}" is in wrong order (group ${group} after group ${highestGroup})`);
    }

    if (lastGroup === group && spec.toLowerCase() < lastSpec.toLowerCase()) {
      violations.push(`${rel}:${i + 1}: import "${spec}" should come before "${lastSpec}" (alphabetical within group)`);
    }

    highestGroup = Math.max(highestGroup, group);
    lastGroup = group;
    lastSpec = spec;
  }
}

if (violations.length) {
  console.warn(`import-order: ${violations.length} violations:\n` + violations.map((v) => `  ${v}`).join("\n"));
  console.warn("\nOrder: node: → packages → @/ → relative. Alphabetical within each group.");
  process.exit(1);
}

console.log(`import-order: ok (${walk(SRC).length} files scanned)`);
