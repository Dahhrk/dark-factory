#!/usr/bin/env node
/**
 * Fail CI if:
 * - a feature imports another feature's private path (relative or alias)
 * - a feature imports shared shell roots (App, main, shell)
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const SRC = path.resolve("src");
const FEATURES_ROOT = path.join(SRC, "features");
const violations = [];

const SHELL_BASENAMES = new Set([
  "App.tsx",
  "App.ts",
  "App.jsx",
  "App.js",
  "main.tsx",
  "main.ts",
  "main.jsx",
  "main.js",
]);

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) walk(p, files);
    else if (/\.(ts|tsx|js|jsx)$/.test(name)) files.push(p);
  }
  return files;
}

function listFeatures() {
  if (!existsSync(FEATURES_ROOT)) return [];
  return readdirSync(FEATURES_ROOT).filter((n) =>
    statSync(path.join(FEATURES_ROOT, n)).isDirectory(),
  );
}

function featureOf(fileAbs) {
  const rel = path.relative(FEATURES_ROOT, fileAbs).replace(/\\/g, "/");
  if (rel.startsWith("..")) return null;
  return rel.split("/")[0] || null;
}

function resolveImport(fromFile, spec) {
  if (!spec.startsWith(".") && !spec.startsWith("@/")) return null;
  let target;
  if (spec.startsWith("@/")) {
    target = path.resolve(SRC, spec.slice(2));
  } else {
    target = path.resolve(path.dirname(fromFile), spec);
  }
  const candidates = [
    target,
    `${target}.ts`,
    `${target}.tsx`,
    `${target}.js`,
    `${target}.jsx`,
    path.join(target, "index.ts"),
    path.join(target, "index.tsx"),
    path.join(target, "index.js"),
    path.join(target, "index.jsx"),
  ];
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) return path.normalize(c);
  }
  return path.normalize(target);
}

const features = listFeatures();
const featureFiles = walk(FEATURES_ROOT);

for (const file of featureFiles) {
  const rel = path.relative(process.cwd(), file).replace(/\\/g, "/");
  const self = featureOf(file);
  const text = readFileSync(file, "utf8");
  const importRe = /from\s+["']([^"']+)["']/g;
  let m;
  while ((m = importRe.exec(text))) {
    const spec = m[1];
    if (spec.startsWith("react") || (!spec.startsWith(".") && !spec.startsWith("@/"))) {
      continue;
    }
    const resolved = resolveImport(file, spec);
    if (!resolved) continue;

    const base = path.basename(resolved);
    const underSrc = path.relative(SRC, resolved).replace(/\\/g, "/");
    if (
      SHELL_BASENAMES.has(base) ||
      underSrc === "App.tsx" ||
      underSrc === "main.tsx" ||
      underSrc.startsWith("shell/")
    ) {
      violations.push(`${rel} imports shell/root "${spec}" → ${underSrc}`);
      continue;
    }

    const other = featureOf(resolved);
    if (other && self && other !== self) {
      const otherRel = path.relative(path.join(FEATURES_ROOT, other), resolved).replace(/\\/g, "/");
      const isPublicIndex =
        otherRel === "index.ts" ||
        otherRel === "index.tsx" ||
        otherRel === "index.js" ||
        otherRel === "index.jsx";
      if (!isPublicIndex) {
        violations.push(
          `${rel} imports private path of feature "${other}": ${spec}`,
        );
      }
    }
  }
}

if (violations.length) {
  console.error("Boundary check failed:\n" + violations.map((v) => ` - ${v}`).join("\n"));
  process.exit(1);
}
console.log(`Boundary check OK (${features.length} features).`);
