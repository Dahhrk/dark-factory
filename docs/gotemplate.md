# Go Template

Coding bar lives in pack **gotemplate-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `gotemplate`, `poteto-gotemplate`
- Rule: `gotemplate.mdc` on `**/*.{go,tmpl,gotmpl,html}`
- Lint tiers (product repos; copy from gotemplate-kit; **all required**):
  - Tier 0: `scripts/gotemplate-rg-gate.sh` (PSR Go Template: text/template for HTML XSS; Execute without context / discarded err; missing FuncMap escaping; nested template include of untrusted names; single-walk; requires rg; covers `.go` / `.tmpl` / `.gotmpl` / `.html`)
  - Tier 0.5: `scripts/gotemplate-hotpath-gate.sh` (`GOTEMPLATE_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/gotemplate-html-gate.sh` (`"html/template"` import-line / CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/gotemplate-gates.yml`
- Pilot research: golang/go `src/text/template` + `src/html/template` (public BSD-3-Clause; drives XSS / Execute / FuncMap / template-name encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-gotemplate`
- Standards source: Programming Standards Reference Go Template chapter (html/template wiring / no text/template for HTML / no discarded Execute / no template.HTML|raw FuncMap / no untrusted template name)

Do not put Go Template product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-gotemplate` standing rule; gotemplate-kit 0.1.0).
