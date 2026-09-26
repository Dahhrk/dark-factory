# React

Coding bar lives in pack **react-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `react`, `poteto-react`
- Rule: `react.mdc` on `**/*.{jsx,tsx}`
- Lint tiers (product repos; copy from react-kit; **all required**):
  - Tier 0: `scripts/react-rg-gate.sh` (PSR React: dangerouslySetInnerHTML without sanitize; findDOMNode; ReactDOM.render; single-walk; requires rg; covers `.jsx` / `.tsx` / `.js` / `.ts`)
  - Tier 0.5: `scripts/react-hotpath-gate.sh` (`REACT_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/react-react-gate.sh` (react / react-dom / @vitejs/plugin-react / CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/react-gates.yml`
- Pilot research: facebook/react (public MIT; fixtures drive dangerouslySetInnerHTML / findDOMNode / ReactDOM.render encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-react`
- Standards source: Programming Standards Reference React chapter (react wiring / no dangerouslySetInnerHTML-without-sanitize / no findDOMNode / no ReactDOM.render)

Do not put React product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-react` standing rule; react-kit 0.1.0).
