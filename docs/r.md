# R

Coding bar lives in pack **r-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `r`, `poteto-r`
- Rule: `r.mdc` on `**/*.{R,r,Rmd,rmd}`
- Lint tiers (product repos; copy from r-kit; **all required**):
  - Tier 0: `scripts/r-rg-gate.sh` (PSR R: `attach()`; `T`/`F` symbols; `eval(parse())`; single-walk; requires rg)
  - Tier 0.5: `scripts/r-hotpath-gate.sh` (`R_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/r-lintr-gate.sh` (lintr lint wiring / live; `T_and_F_symbol_linter` + `undesirable_function_linter` required)
  - Product CI skeleton: `templates/github-workflows/r-gates.yml`
- Pilot research: tidyverse/ggplot2 (public MIT; lintr-friendly; drives attach / T-F / eval(parse) encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-r`
- Standards source: Programming Standards Reference R chapter (lintr / no `attach()` / TRUE/FALSE not T/F / no `eval(parse())`)

Do not put R product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-r` standing rule; r-kit 0.1.0).
