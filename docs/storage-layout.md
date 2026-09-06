# Storage layout (public vs private)

How the public pstack / agent-factory stack is stored in the wild, and how **this machine** mirrors it. Do not collapse these layers into one repo.

## Public pattern (evidence)

| Layer | Store | Updates |
|-------|--------|---------|
| Public OS | Cursor marketplace (`pstack`, `cursor-team-kit`) | Plugin auto-update — do not vendor |
| Public teaching | X / LinkedIn / grokbot.sh / `github.com/poteto/*` | Essays, Atlas *example*, noodle skills, Benny *pack* |
| Global prefs | `~/.cursor/rules/` (e.g. model map) | Once per machine |
| Private product | Private git remote(s) | Real `control-*`, Feature Map, Dune CI, app code |
| Private ops | Slack + Grok Bot + Cloud + secret store | Outer loop, wired Benny, spend — never in OSS |

## This machine (matched)

```text
~/.cursor/rules/          GLOBAL PREFS (all projects)
  pstack-models.mdc
  poteto-factory-os.mdc

~/.cursor/plugins/...     PUBLIC OS (marketplace cache)
  pstack/
  cursor-team-kit/

~/Projects/dark-factory/  PUBLIC KITCHEN (safe to publish)
  docs/                   distill / OS recreate
  templates/product-bootstrap/   copy onto products
  examples/        what outsiders install/read
  intake/  audit/         factory ops (keep mild; no secrets)
  local/                  gitignored — your scratch / webhook drafts
  .cursor/skills/verify-factory/   kitchen health only

~/Projects/Control-Glass/     PRIVATE PRODUCT #1 (web)
  src/                    app
  .cursor/skills/verify-glass/   real CLI + Feature Map
  BUGBOT.md  .cursor/dune.md
  .github/workflows/      hard CI
  PRIVATE.md              visibility contract
  (secrets via env / Cursor — never committed)

~/Projects/gmod-join-clinic/  PRODUCT #2 (non-web, lean public tip)
  lua/                    addon runtime (public git)
  docs/DESIGN.md          public design notes
  .cursor/ + tools/       eyes on disk, gitignored — see lean-public-tip.md
  PRIVATE.md              visibility contract (local)

~/Projects/<next-app>/    PRODUCT #N
  web default: dark-factory/scripts/new-product.ps1 (Vite)
  non-web: folder + bootstrap pieces by hand — do not force Vite
```

## Non-web products

`new-product.ps1` scaffolds a React/Vite app. Skip it when the runtime is not a web UI (Lua addon, CLI-only, engine plugin, etc.).

Minimum instead:

1. `mkdir ~/Projects/<name>` + `git init`
2. Copy applicable pieces from `templates/product-bootstrap/` (Dune, BUGBOT, AGENTS, PRIVATE — skip anti-ai-ui if there is no web UI)
3. Open that folder → `/create-verification-skill`
4. If the remote is **public** but eyes stay author-local, follow [lean-public-tip.md](lean-public-tip.md)

Do **not** add a second scaffold script until a second non-web product needs the same steps. Smell twice → encode.

## Rules that keep the match

1. **Plugins stay plugins.** Never copy pstack into a product “to keep it updated.”
2. **Kitchen never gets `/create-verification-skill` for a real app.** Product path only.
3. **Feature Maps with real selectors stay private** until scrubbed for an Atlas-style example.
4. **One writer per durable store** — product state in product repo; queue/decisions in kitchen.
5. **New product** = new folder under `Projects/`, bootstrap from kitchen (Vite script *or* non-web hand path), then create-verify in *that* chat.
6. **Publish** only: kitchen docs + `templates/` + `examples/` (+ optional scrubbed verify example later).
7. **Kitchen never invents a product.** Join Clinic / Glass app code stay in their product repos.

## Visibility labels

| Path | Default remote | Label file |
|------|----------------|------------|
| `dark-factory` | Public OK | [VISIBILITY.md](../VISIBILITY.md) |
| `Control-Glass` | **Private** | `Control-Glass/PRIVATE.md` |
| `gmod-join-clinic` | **Public** (lean tip) | `gmod-join-clinic/PRIVATE.md` (local) + [lean-public-tip.md](lean-public-tip.md) |
| `~/.cursor/rules` | Local machine | — |

## Related

- [lean-public-tip.md](lean-public-tip.md)
- [global-vs-private.md](global-vs-private.md)
- [match-ceiling.md](match-ceiling.md)
- [SETUP-STATUS.md](SETUP-STATUS.md)
- [../examples/README.md](../examples/README.md)
- [../scripts/new-product.ps1](../scripts/new-product.ps1)
