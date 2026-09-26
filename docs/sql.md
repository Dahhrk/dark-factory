# SQL

Coding bar lives in pack **sql-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `sql`, `poteto-sql`
- Rule: `sql.mdc` on `**/*.{sql,SQL}`
- Lint tiers (product repos; copy from sql-kit; **all required**):
  - Tier 0: `scripts/sql-rg-gate.sh` (PSR SQL: `SELECT *`; SQL injection concat; unsafe dynamic SQL; single-walk; requires rg)
  - Tier 0.5: `scripts/sql-hotpath-gate.sh` (`SQL_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/sql-sqlfluff-gate.sh` (sqlfluff lint wiring / live; AM04 / ambiguous required)
  - Product CI skeleton: `templates/github-workflows/sql-gates.yml`
- Pilot research: sqlfluff/sqlfluff (public MIT SQL linter; drives AM04 / SELECT * encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-sql`
- Standards source: Programming Standards Reference SQL chapter (sqlfluff lint / no `SELECT *` / no SQL injection concat / no unsafe dynamic SQL)

Do not put SQL product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-sql` standing rule; sql-kit 0.1.0).
