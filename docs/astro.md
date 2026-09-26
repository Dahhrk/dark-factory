# Astro

Coding bar lives in pack **astro-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `astro`, `poteto-astro`
- Rule: `astro.mdc` on `**/*.astro`
- Lint tiers (product repos; copy from astro-kit; **all required**):
  - Tier 0: `scripts/astro-rg-gate.sh` (PSR Astro: client:load abuse; set:html without sanitize; define:vars XSS; single-walk; requires rg; covers `.astro`)
  - Tier 0.5: `scripts/astro-hotpath-gate.sh` (`ASTRO_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/astro-astro-gate.sh` (astro package / astro.config.* / CI astro check|build wiring / live)
  - Product CI skeleton: `templates/github-workflows/astro-gates.yml`
- Pilot research: withastro/astro (public MIT Astro framework; drives client directives + set:html + define:vars XSS encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-astro`
- Standards source: Programming Standards Reference Astro chapter (astro wiring / no client:load abuse / no set:html without sanitize / no define:vars XSS smells)

Do not put Astro product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-astro` standing rule; astro-kit 0.1.0).
