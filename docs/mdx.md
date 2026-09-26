# MDX

Coding bar lives in pack **mdx-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `mdx`, `poteto-mdx`
- Rule: `mdx.mdc` on `**/*.{mdx,MDX,js,jsx,mjs,cjs,ts,tsx}` (MDX content + pipeline)
- Lint tiers (product repos; copy from mdx-kit; **all required**):
  - Tier 0: `scripts/mdx-rg-gate.sh` (PSR MDX: dangerouslySetInnerHTML; untrusted evaluate/evaluateSync; rehype-raw without sanitize; single-walk; requires rg; covers `.mdx` + pipeline JS/TS)
  - Tier 0.5: `scripts/mdx-hotpath-gate.sh` (`MDX_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/mdx-mdx-gate.sh` (@mdx-js/* / @next/mdx / mdx config / CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/mdx-gates.yml`
- Pilot research: mdx-js/mdx (public MIT MDX compiler; drives Security chapter + evaluate + rehype-raw encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-mdx`
- Standards source: Programming Standards Reference MDX chapter (mdx wiring / no raw HTML injection / no untrusted JSX evaluate / no rehype-raw without sanitize)

Do not put MDX product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-mdx` standing rule; mdx-kit 0.1.0).
