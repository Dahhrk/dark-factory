# Product bootstrap (copy onto a real app)

Do **not** run inside dark-factory. Use `-TargetRepo` or `scripts/new-product.ps1`.

## Contents

| Path | Job |
|------|-----|
| `BUGBOT.md` | Soft review bans (her Bugbot layer) |
| `cursor-settings.json` | Copied to `.cursor/settings.json` — enables `pstack` + `cursor-team-kit` |
| `anti-ai-ui.mdc` | Copied to `.cursor/rules/` — always-on UI direction + bans |
| `check-anti-ai-ui.mjs` | Copied to `scripts/` — wire `npm run anti-ai-ui` + CI |
| `dune.md` | **Dune** five rules + CI checklist (method only) |
| `AGENTS.product.md` | → product `AGENTS.md` |
| `PRIVATE.product.md` | → product `PRIVATE.md` |
| `install.ps1` | Copies files + optional noodle / anti-slop |

Naming: kitchen `docs/naming.md`. Layout: `docs/her-system-map.md`.

## After copy

```text
/create-verification-skill
```

Daily `/maintain-verification-skill`. Pin `/poteto-mode`.
