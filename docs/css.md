# CSS

Coding bar lives in pack **css-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `css`, `poteto-css`
- Rule: `css.mdc` on `**/*.{css,CSS}`
- Lint tiers (product repos; copy from css-kit; **all required**):
  - Tier 0: `scripts/css-rg-gate.sh` (PSR CSS: !important abuse; universal selector hotpath; expression()/behavior IE smells; single-walk; requires rg)
  - Tier 0.5: `scripts/css-hotpath-gate.sh` (`CSS_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/css-stylelint-gate.sh` (stylelint lint wiring / live; declaration-no-important + selector-max-universal required)
  - Product CI skeleton: `templates/github-workflows/css-gates.yml`
- Pilot research: stylelint/stylelint (public MIT CSS linter; drives declaration-no-important / selector-max-universal encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-css`
- Standards source: Programming Standards Reference CSS chapter (stylelint lint / no !important abuse / no universal selector hotpath / no expression()/behavior IE smells)

Do not put CSS product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-css` standing rule; css-kit 0.1.0).
