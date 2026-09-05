# System map — public OS → kitchen → private product

This kitchen is **inspired by** public pstack / Cursor agent-factory materials. It is not a published third-party factory and not affiliated with those authors.

| Layer | What it is | Our match |
|-------|------------|-----------|
| **Public OS** | Cursor marketplace **`pstack`** + **`cursor-team-kit`** | Same plugins — do not vendor |
| **Public teaching** | Essays, workshops, guides | **`dark-factory/docs/`** (source archive + recipes) |
| **Public examples** | verification-skill-example (Atlas), noodle, Benny *pack* in pstack | **`examples/`** + **`templates/product-bootstrap/`**; Benny via pstack when Slack is real |
| **Global prefs** | Model map / habits | `~/.cursor/rules/` + user factory rule |
| **Private product** | App + Dune method + `control-*` + Feature Map + CI | e.g. **`Control-Glass`** |
| **Private ops** | Slack + Grok Bot routines + Cloud Agents + secrets | `automations/*` staged; you enable |

```text
PUBLIC OS        →  pstack + cursor-team-kit   (marketplace)
PUBLIC TEACHING  →  dark-factory              (this repo)
PUBLIC EXAMPLES  →  examples + templates
PRIVATE PRODUCT  →  ~/Projects/Control-Glass  (and other apps)
OPS (staged)     →  automations/ + your Cloud / fleet
```

Naming: [naming.md](naming.md).

## What dark-factory is (and is not)

| Is | Is not |
|----|--------|
| Your **public teaching kitchen** | Someone else’s private factory |
| Safe to keep **public** (no secrets / real Feature Maps) | A replacement for pstack |
| Pointers to install pstack / bootstrap products | Where Autopilot or live product maps live |

## What Control-Glass is

Private product at `~/Projects/Control-Glass`. Eyes: `control-glass` / `verify-glass`. Method: **Dune** in `.cursor/dune.md`. Private remote.

## Related

[match-ceiling.md](match-ceiling.md) · [SETUP-STATUS.md](SETUP-STATUS.md) · [TRUST-NEXT.md](TRUST-NEXT.md) · [VISIBILITY.md](../VISIBILITY.md)
