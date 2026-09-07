# Lean public tip

For a **public** GitHub remote (OSS addon, Workshop-adjacent repo) where the factory kit must stay on the author machine but not on the tip.

## Split

| On disk (always) | In public git | Not in ship artifact |
|------------------|---------------|----------------------|
| App / addon runtime | Same runtime + thin README / LICENSE / design notes you want contributors to see | `.cursor/`, `tools/`, `AGENTS.md`, `BUGBOT.md`, `.github/` (if you keep CI private), `PRIVATE.md`, `local/`, secrets |
| `verify-<app>` + `control-<app>` + Feature Map | Omit via `.gitignore` | Also omit from Workshop / package ignore lists |

Eyes still exist. Contributors clone a lean tip; you open the same folder with local kit.

## Bootstrap

1. Folder under `~/Projects/` — not Vite if the product is not a web app ([storage-layout.md](storage-layout.md)).
2. Copy Dune / BUGBOT / AGENTS / PRIVATE from `templates/product-bootstrap/` by hand (or only the pieces that apply).
3. `/create-verification-skill` in the product chat.
4. `.gitignore` the factory kit; keep `PRIVATE.md` accurate about what git actually tracks.
5. Ship artifact (Workshop GMA, npm publish, etc.) has its own ignore list — usually stricter than git.

## Do not

- Vendor marketplace pstack into the public tip “for contributors.”
- Put real Feature Map selectors or Steam/server secrets in git.
- Invent the product inside `dark-factory`.

## First proof

`gmod-join-clinic` — public tip is `lua/` + `addon.json` + docs; eyes gitignored on disk.
