# Integrations — what talks to what

Nothing here is a single mesh. Each hop is a different product. Add only what you need.

## Already on

| Hop | What it does |
|-----|----------------|
| Grok **model** in Cursor | This chat can use `cursor-grok-4.6`. Not a bot. |
| Cursor Automations | maintain-verify-glass, encode-lessons-weekly, morning-catchup |
| Cloud Agents | Grok Bot / Automations can spawn a coding VM on Control-Glass |
| GitHub | Private `Dahhrk/Control-Glass`, Bugbot |
| Grok Bot Chief + Engineer | You created these. Talk to them **in Grok Bot**, not this chat |

## Add now (look routing)

| Hop | Who | Why |
|-----|-----|-----|
| **Figma Engineer** bot | You, Get started | Chief needs a look specialist |
| **Chief webhook** `cursor-handoff` | You create the routine. This repo has the poster | This Cursor chat can POST a ticket to Chief |
| **Figma connector** on Figma Engineer | You, in that bot's connectors | He designs in Figma, not a CSS guess |

## Do not add yet

| Hop | Why wait |
|-----|----------|
| Slack + Benny | Kitchen: after a real bug channel |
| Grok Build (`grok` CLI) | Separate terminal coder. Does not talk to Chief or this chat |
| Tailscale | Only if a phone or another PC must hit the handoff page |
| Extra farmers (X, GitHub comments) | After one overnight |

## How a Glass task should move

```text
You in Grok Bot  →  Chief of Staff
                      → Figma Engineer  (Figma file)
                      → Engineer        (spawn Cloud Agent on Control-Glass)
                                         → PR + control-glass proof
```

This Cursor chat joins only after the webhook exists:

```text
Handoff page (this PC)  →  POST webhook  →  Chief routine wakes
```

## Secrets

Webhook sender key never goes in chat or git. It lives in `local/cursor-handoff/config.json` (gitignored).
