# Her system → ours (1:1 model)

Lauren does **not** ship a public “dark-factory” repo. Her split is:

| Her layer | What it is | Our match |
|-----------|------------|-----------|
| **Public OS** | Cursor marketplace **`pstack`** + **`cursor-team-kit`** | Same plugins — **do not vendor** |
| **Public teaching** | Essays, workshop, Pt. 1, grokbot.sh | **`dark-factory/docs/`** |
| **Public examples** | `verification-skill-example` (Atlas), noodle, Benny *pack* in pstack | **`examples/`** + **`templates/product-bootstrap/`** + noodle on products; Benny via pstack |
| **Global prefs** | Model map / habits | `~/.cursor/rules/` + user Factory rule |
| **Private product factory** | Grok Bot: **Dune**, `control-glass`, Feature Map, CI | **`Control-Glass`**: **Dune**, `control-glass`, `verify-glass`, CI |
| **Private ops** | Slack + Grok Bot routines + Cloud Agents + secrets | `automations/*` staged; you enable |

```text
HER                          OURS
─────────────────────────    ─────────────────────────────
pstack (marketplace)    →    pstack (marketplace)     PUBLIC OS
essays / talks          →    dark-factory/docs        PUBLIC TEACHING
Atlas / packs           →    examples + templates     PUBLIC EXAMPLES
Grok Bot monorepo       →    Control-Glass        PRIVATE FACTORY
control-glass           →    control-glass            (skill name; folder named after it)
Dune                    →    Dune                     (method only — .cursor/dune.md)
Benny (wired)           →    Control-Glass .cursor/benny  (staged, off)
Grok routines           →    automations/grok-bot
Cloud Agents 24/7       →    your Cursor Cloud
```

Naming policy: [naming.md](naming.md) — use **her names** for borrowed pieces.

## What dark-factory is (and is not)

| Is | Is not |
|----|--------|
| Your **public teaching kitchen** (essays + recipes in git) | A public factory she never published |
| Safe to make **public** | A replacement for pstack |
| Pointers to install pstack / bootstrap products | Where Autopilot or real Feature Maps live |

## What Control-Glass is

Our private product factory at `~/Projects/Control-Glass`. Named after her skill `control-glass`. Not a claim that her on-disk Glass folder is this path. Same pieces: `control-glass`, Feature Map, **Dune**, CI, private remote.

## Rules

1. Public OS = **plugins**, not a pstack fork in git.  
2. Public teaching = **dark-factory**.  
3. Private factory = **Control-Glass** (then `new-product.ps1`).  
4. Never publish real selectors/secrets.  
5. Say **Dune**, **Feature Map**, **Benny**, **`/poteto-mode`** — not parallel brand names.

## Related

- [storage-layout.md](storage-layout.md) · [PUBLIC.md](../PUBLIC.md) · [match-ceiling.md](match-ceiling.md)
