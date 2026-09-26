# JavaScript

Coding bar lives in pack **javascript-kit** (plug-factory / plugins twin), not in this kitchen. **Distinct from typescript-kit** (no oxlint / tsconfig / type-aware promises).

- Skills: `javascript`, `poteto-javascript`
- Rule: `javascript.mdc` on `**/*.{js,mjs,cjs,jsx}`
- Lint tiers (product repos; copy from javascript-kit; **all required**):
  - Tier 0: `scripts/js-rg-gate.sh` (PSR JS: eval / new Function; prototype-pollution smells; sync fs on request path; single-walk; requires rg)
  - Tier 0.5: `scripts/js-hotpath-gate.sh` (`JS_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/js-fmt-gate.sh` (Prettier wiring / live `--check`)
  - Tier 1: `scripts/js-eslint-flat-gate.sh` (ESLint flat `eslint.config.js|mjs|cjs`; legacy `.eslintrc*` alone fails)
  - Product CI skeleton: `templates/github-workflows/js-gates.yml`
- Pilot research: expressjs/express (public catalog top pick, MIT)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-javascript`
- Standards source: Programming Standards Reference JavaScript chapter (ECMA-262/TC39 / ESLint flat config / Prettier / no-eval / prototype-pollution smells / no sync fs on request path)

Do not put JavaScript product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-javascript` standing rule; javascript-kit 0.1.0).
