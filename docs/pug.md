# Pug

Coding bar lives in pack **pug-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `pug`, `poteto-pug`
- Rule: `pug.mdc` on `**/*.{pug,Pug,jade,Jade}`
- Lint tiers (product repos; copy from pug-kit; **all required**):
  - Tier 0: `scripts/pug-rg-gate.sh` (PSR Pug: unescaped buffered XSS `!=` / `!{}`; include of untrusted interpolated paths; mixin injection `+#{…}`; single-walk; requires rg; covers `.pug` / `.jade`)
  - Tier 0.5: `scripts/pug-hotpath-gate.sh` (`PUG_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/pug-pug-gate.sh` (`"pug":` / pug config / CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/pug-gates.yml`
- Pilot research: pugjs/pug (public MIT Pug compiler; drives unescaped buffered / include / mixin encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-pug`
- Standards source: Programming Standards Reference Pug chapter (pug wiring / no unescaped != / !{} / no interpolated include / no dynamic mixin)

Do not put Pug product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-pug` standing rule; pug-kit 0.1.0).
