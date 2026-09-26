# HTML

Coding bar lives in pack **html-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `html`, `poteto-html`
- Rule: `html.mdc` on `**/*.{html,htm,HTML,HTM}`
- Lint tiers (product repos; copy from html-kit; **all required**):
  - Tier 0: `scripts/html-rg-gate.sh` (PSR HTML: missing alt; inline JS/CSS; external script without integrity; single-walk; requires rg)
  - Tier 0.5: `scripts/html-hotpath-gate.sh` (`HTML_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/html-htmlhint-gate.sh` (htmlhint lint wiring / live; alt-require + inline-script-disabled + inline-style-disabled required)
  - Product CI skeleton: `templates/github-workflows/html-gates.yml`
- Pilot research: htmlhint/HTMLHint (public MIT HTML linter; drives alt-require / inline-script-disabled / inline-style-disabled encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-html`
- Standards source: Programming Standards Reference HTML chapter (htmlhint lint / no missing alt / no inline JS/CSS smells / no external script without integrity where relevant)

Do not put HTML product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-html` standing rule; html-kit 0.1.0).
