#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const pkgPath = process.argv[2];
if (!pkgPath || !existsSync(pkgPath)) {
  console.log("wire-package-scripts: no package.json, skip");
  process.exit(0);
}

const SCRIPTS = {
  "anti-ai-ui": "node scripts/check-anti-ai-ui.mjs",
  "dune-footguns": "node scripts/check-dune-footguns.mjs",
  "file-size": "node scripts/check-file-size.mjs",
  "bundle-size": "node scripts/check-bundle-size.mjs",
  "pr-size": "node scripts/check-pr-size.mjs",
  "a11y": "node scripts/check-a11y.mjs",
  "commit-lint": "node scripts/check-commit-lint.mjs",
  "dead-exports": "node scripts/check-dead-exports.mjs",
  "func-length": "node scripts/check-func-length.mjs",
  "duplicate-code": "node scripts/check-duplicate-code.mjs",
  "no-barrels": "node scripts/check-no-barrels.mjs",
  "import-order": "node scripts/check-import-order.mjs",
  "boundaries": "node scripts/check-boundaries.mjs",
};

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.scripts = pkg.scripts || {};
for (const [key, value] of Object.entries(SCRIPTS)) {
  pkg.scripts[key] = value;
}
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
console.log(`wire-package-scripts: wrote ${Object.keys(SCRIPTS).length} keys`);
