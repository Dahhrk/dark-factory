# Tailwind CSS

Coding bar lives in pack **tailwind-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `tailwind`, `poteto-tailwind`
- Rule: `tailwind.mdc` on Tailwind templates / CSS / `tailwind.config.*`
- Lint tiers (product repos; copy from tailwind-kit; **all required**):
  - Tier 0: `scripts/tailwind-rg-gate.sh` (PSR Tailwind: `@apply` overuse; arbitrary-value sprawl; safelist abuse / `@source inline`; content-path miss / purge footguns; single-walk; requires rg)
  - Tier 0.5: `scripts/tailwind-hotpath-gate.sh` (`TAILWIND_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/tailwind-tailwind-gate.sh` (`"tailwindcss":` / `tailwind.config.*` / `@import "tailwindcss"` / CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/tailwind-gates.yml`
- Pilot research: tailwindlabs/tailwindcss (public MIT; drives `@apply` / arbitrary / safelist / content-path encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-tailwind`
- Standards source: Programming Standards Reference Tailwind chapter (tailwindcss wiring / no @apply overuse / no arbitrary sprawl / no safelist abuse / no content-path miss)

Do not put Tailwind product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-tailwind` standing rule; tailwind-kit 0.1.0).
