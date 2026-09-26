# SCSS / Sass

Coding bar lives in pack **scss-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `scss`, `poteto-scss`
- Rule: `scss.mdc` on `**/*.{scss,sass,SCSS,SASS}`
- Lint tiers (product repos; copy from scss-kit; **all required**):
  - Tier 0: `scripts/scss-rg-gate.sh` (PSR SCSS: !important abuse; @extend overuse; /deep/ or >>>; nesting depth >4; single-walk + file-level nest; requires rg; covers `.scss` and `.sass`)
  - Tier 0.5: `scripts/scss-hotpath-gate.sh` (`SCSS_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/scss-sass-gate.sh` (sass / dart-sass compile wiring / live)
  - Product CI skeleton: `templates/github-workflows/scss-gates.yml`
- Pilot research: sass/dart-sass (public MIT Sass reference implementation; drives @extend complexity + compile wiring encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-scss`
- Standards source: Programming Standards Reference SCSS chapter (sass/dart-sass wiring / no !important abuse / no @extend overuse / no /deep/ or >>> / nesting depth ≤4)

Do not put SCSS product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-scss` standing rule; scss-kit 0.1.0).
