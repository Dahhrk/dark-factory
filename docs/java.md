# Java

Coding bar lives in pack **java-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `java`, `poteto-java`
- Rule: `java.mdc` on `**/*.{java,gradle,kts}`
- Lint tiers (product repos; copy from java-kit; **all required**):
  - Tier 0: `scripts/java-rg-gate.sh` (PSR Java: System.out/err; printStackTrace; SQL string concat; catch NullPointerException; single-walk; requires rg)
  - Tier 0.5: `scripts/java-hotpath-gate.sh` (`JAVA_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/java-fmt-gate.sh` (google-java-format / Spotless / spring-javaformat wiring)
  - Tier 1: `scripts/java-checkstyle-ci-gate.sh` (Checkstyle or Error Prone wiring)
  - Tier 1: `scripts/java-nullability-gate.sh` (jspecify / NullMarked / NullAway / Checker / Spring Nullable)
  - Product CI skeleton: `templates/github-workflows/java-gates.yml`
- Pilot research: spring-projects/spring-boot (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-java`
- Standards source: Programming Standards Reference Java chapter (JLS/JVMS / google-java-format or Spotless / Checkstyle/Error Prone / nullability / no System.out / no SQL string concat)

Do not put Java product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-java` standing rule; java-kit 0.1.0).
