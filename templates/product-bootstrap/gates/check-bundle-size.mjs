#!/usr/bin/env node
/**
 * Bundle size budget: fail CI if production JS or CSS exceeds limits.
 *
 * Thresholds (gzip):
 *   JS_BUDGET_KB   max gzip KB for all JS chunks combined (default 200)
 *   CSS_BUDGET_KB  max gzip KB for all CSS chunks combined (default 50)
 *
 * Run after `npm run build`.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { gzipSync } from "node:zlib";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist", "assets");
const JS_BUDGET = Number(process.env.JS_BUDGET_KB || 200) * 1024;
const CSS_BUDGET = Number(process.env.CSS_BUDGET_KB || 50) * 1024;

function gzipSize(filePath) {
  const raw = readFileSync(filePath);
  return gzipSync(raw).length;
}

let jsTotal = 0;
let cssTotal = 0;
const details = [];

if (!statSync(DIST, { throwIfNoEntry: false })?.isDirectory()) {
  console.error("bundle-size: dist/assets not found — run npm run build first");
  process.exit(1);
}

for (const name of readdirSync(DIST)) {
  const abs = path.join(DIST, name);
  const gz = gzipSize(abs);
  if (name.endsWith(".js")) {
    jsTotal += gz;
    details.push({ name, gzipKB: (gz / 1024).toFixed(1), type: "JS" });
  } else if (name.endsWith(".css")) {
    cssTotal += gz;
    details.push({ name, gzipKB: (gz / 1024).toFixed(1), type: "CSS" });
  }
}

console.log("bundle-size breakdown:");
for (const d of details) {
  console.log(`  ${d.type.padEnd(4)} ${d.gzipKB.padStart(8)} KB gzip  ${d.name}`);
}
console.log(`\n  JS total:  ${(jsTotal / 1024).toFixed(1)} KB gzip (budget: ${(JS_BUDGET / 1024).toFixed(0)} KB)`);
console.log(`  CSS total: ${(cssTotal / 1024).toFixed(1)} KB gzip (budget: ${(CSS_BUDGET / 1024).toFixed(0)} KB)`);

let failed = false;
if (jsTotal > JS_BUDGET) {
  console.error(`\nbundle-size FAIL: JS ${(jsTotal / 1024).toFixed(1)} KB exceeds budget ${(JS_BUDGET / 1024).toFixed(0)} KB`);
  failed = true;
}
if (cssTotal > CSS_BUDGET) {
  console.error(`\nbundle-size FAIL: CSS ${(cssTotal / 1024).toFixed(1)} KB exceeds budget ${(CSS_BUDGET / 1024).toFixed(0)} KB`);
  failed = true;
}

if (failed) process.exit(1);
console.log("\nbundle-size: ok");
