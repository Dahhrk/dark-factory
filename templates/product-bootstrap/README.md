# Product bootstrap (copy onto a real app)

Do **not** run inside dark-factory. Use `-TargetRepo` or `scripts/new-product.ps1`.

For **non-web** products, skip the Vite script — copy only the pieces that apply (often Dune + BUGBOT + AGENTS + PRIVATE; skip anti-ai-ui). Layout: `docs/storage-layout.md`. Public lean tip: `docs/lean-public-tip.md`.

## Contents

| Path | Job |
|------|-----|
| `BUGBOT.md` | Soft review bans (Bugbot layer) |
| `cursor-settings.json` | Copied to `.cursor/settings.json`. Enables `pstack` + `cursor-team-kit`. |
| `anti-ai-ui.mdc` | Copied to `.cursor/rules/`. Always-on UI direction + mechanical bans. |
| `gates/*.mjs` | Gate pack copied to `scripts/`. Wired into `package.json` when that file exists. |
| `check-anti-ai-ui.mjs` | Re-exports `gates/check-anti-ai-ui.mjs` (install copies the gates file) |
| `dune.md` | **Dune** five rules + CI checklist (method only) |
| `AGENTS.product.md` | â†’ product `AGENTS.md` |
| `PRIVATE.product.md` | â†’ product `PRIVATE.md` |
| `install.ps1` | Copies files + optional noodle / anti-slop |

Gate pack (from Control-Glass, kitchen distributes): `anti-ai-ui`, `boundaries`, `dune-footguns`, `file-size`, `bundle-size`, `pr-size`, `a11y`, `commit-lint`, `dead-exports`, `func-length`, `duplicate-code`, `no-barrels`, `import-order`.

Install wires that pack only. Add `visual-parity` after the product has baselines.

`-WithDesignSkills` still installs noodle (`frontend-design`, `make-interfaces-feel-better`, `interaction-design`). `-WithAntiSlop` still installs anti-slop.

Refresh gates from Glass (source of truth) with `scripts/sync-bootstrap-gates.ps1`. Kitchen applies near-cream + terracotta class encodings after the copy.

Naming: kitchen `docs/naming.md`. Layout: `docs/system-map.md`.

## After copy

```text
/create-verification-skill
```

Daily `/maintain-verification-skill`. Pin `/poteto-mode`.
