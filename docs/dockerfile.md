# Dockerfile

Coding bar lives in pack **dockerfile-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `dockerfile`, `poteto-dockerfile`
- Rule: `dockerfile.mdc` on `**/Dockerfile*`, `**/*.Dockerfile`, `**/Containerfile*`, `**/docker-compose*.{yml,yaml}`
- Lint tiers (product repos; copy from dockerfile-kit; **all required**):
  - Tier 0: `scripts/dockerfile-rg-gate.sh` (PSR Dockerfile: ADD vs COPY secrets; `:latest` tags; apt without cleanup; USER root late; secrets in ARG/ENV; curl|bash; single-walk; requires rg; covers Dockerfile* / *.Dockerfile / Containerfile* / compose)
  - Tier 0.5: `scripts/dockerfile-hotpath-gate.sh` (`DOCKERFILE_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/dockerfile-docker-gate.sh` (Dockerfile / Containerfile / compose / CI docker wiring / live)
  - Product CI skeleton: `templates/github-workflows/dockerfile-gates.yml`
- Pilot research: moby/buildkit (public Apache-2.0; Dockerfile frontend / parser + `SecretsUsedInArgOrEnv` / build checks drive encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-dockerfile`
- Standards source: Programming Standards Reference Dockerfile chapter (docker wiring / no ADD-vs-COPY secrets / no `:latest` / no apt-no-cleanup / no USER root late / no secrets ARG|ENV / no curl|bash)

Do not put Dockerfile product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-dockerfile` standing rule; dockerfile-kit 0.1.0).
