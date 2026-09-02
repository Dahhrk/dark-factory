# Setup status — trust stack closeout

## Gate board (honest)

| Gate | Status | Evidence |
|------|--------|----------|
| **0 Account** | **DONE** (you) | Cloud Agents enabled — **confirm spend cap** in billing |
| **1 Plugins + models + rules** | **DONE** | pstack + team-kit + model map + hooks/rules |
| **2 Verify + Feature Map** | **DONE** (local) | `verify-glass` + sticky drive daemon; smoke idle→ready |
| **3 Dune CI** | **HARDENING** | Boundaries / anti-slop / drive-in-CI closing; green on remote = real done |
| **4 Design** | **PARTIAL** | noodle on product; anti-slop must be wired in product lint |
| **5 Outer loop / Grok Bot** | **OPTIONAL** | Paste [automations/grok-bot/PASTE-NOW.md](../automations/grok-bot/PASTE-NOW.md) if you want dual-bot |
| **6 Cursor Automations** | **SAVED** (you) | Point workspace at `~/Projects/Control-Glass`; name `maintain-verify-glass` |
| **7 Autopilot** | **BLOCKED** | Needs remotes + green CI + **one overnight** with `audit/decisions.tsv` rows |
| **8 /automate-me** | **OPTIONAL** | After product chat history |
| **9 Remotes** | **IN PROGRESS** | Public kitchen + private Control-Glass |

## Product folder

Private product: `~/Projects/Control-Glass` (named after her skill `control-glass`). Eyes: `verify-glass` / `control-glass` / `GLASS_*`. Dune method in `.cursor/dune.md` — not her Electron source.

## Trust curve (do not skip)

1. Watch one agent with eyes + hard CI  
2. One overnight with Done means + decision log  
3. Limited Autopilot-full  
4. Only then “don’t look at code” is earned  

Plugins alone are not that stage.

## Still you

1. Confirm **spend cap**  
2. Automations workspace = `~/Projects/Control-Glass`  
3. Optional Grok Bot paste  
4. Say go on overnight after remotes are green  
5. Benny only after Slack + real tracker YAML  

## Do not enable yet

Benny Slack line · Autopilot fleet · Orchestrate

See: [TRUST-NEXT.md](TRUST-NEXT.md) · [her-system-map.md](her-system-map.md) · [naming.md](naming.md) · [match-ceiling.md](match-ceiling.md)
