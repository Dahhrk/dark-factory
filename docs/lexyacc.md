# Lex/Yacc

Coding bar lives in pack **lexyacc-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `lexyacc`, `poteto-lexyacc`
- Rule: `lexyacc.mdc` on `**/*.l`, `**/*.y`, `**/*.lex`, `**/*.yacc`, `**/*.ll`, `**/*.yy`
- Lint tiers (product repos; copy from lexyacc-kit; **all required**):
  - Tier 0: `scripts/lexyacc-rg-gate.sh` (PSR Lex/Yacc: untrusted %include/#include paths; yyerror silence; unbounded yytext buffers; unbounded yytext pointer walks; single-walk; requires rg; covers *.l / *.y / *.lex / *.yacc / *.ll / *.yy)
  - Tier 0.5: `scripts/lexyacc-hotpath-gate.sh` (`LEXYACC_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/lexyacc-tool-gate.sh` (*.l / *.y / flex|bison|lex|yacc CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/lexyacc-gates.yml`
- Pilot research: westes/flex (public BSD-3-Clause-flex; yytext / include surfaces) + akimd/bison (GPL-3.0; fixtures only, do not vendor substantial GPL) drive encode
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-lexyacc`
- Standards source: Programming Standards Reference Lex/Yacc chapter (tool wiring / no untrusted-include / no yyerror-silence / no unbounded-yytext / no unbounded-yytext-ptr)

Do not put Lex/Yacc product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-lexyacc` standing rule; lexyacc-kit 0.1.0).
