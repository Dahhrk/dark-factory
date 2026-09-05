# Triage subscribe (Lauren public answer, 5 Sep 2026)

When asked for a deeper setup dump, Lauren pointed at **one bot routine**, not a private tour:

> can you subscribe to \<slack channel\>? i want to kick off a triage cloud agent for every mention of "poteto poteto poteto", "poteto", "lauren". the agent should use `/lauren-mode` to investigate, use `/control-grok-bot` to repro and tell me if it's still broken on main.

Source: [x.com/poteto/status/2096091102311051665](https://x.com/poteto/status/2096091102311051665) (linked from her reply to Cryptarchio).

## Map to our factory

| Hers | Ours |
|------|------|
| Grok Bot subscribe | Harvey routine / fleet Subscribe when a channel exists |
| Keyword wake (`poteto poteto poteto`, …) | Pick one phrase; Send Feedback or Slack |
| `/lauren-mode` | `/brooklyn-mode` → `/poteto-mode` |
| `/control-grok-bot` | Product `control-<app>` (`control-glass`, `control-flashpeek`) |
| Broken on **main**? | Same — repro against main, no invented passes |

Bots **coordinate**. Cloud Agent (or local Agent on Cursor Models) **investigates + repros**. Human merges.

## Paste template (fail closed without Slack)

Do **not** enable until a real channel or feedback inbox exists. Benny stays off.

```text
Subscribe to <channel or feedback source>.
On every mention of "<keyword>" (and optional aliases):
  1. Queue a triage item for Harvey → Tony
  2. Spawn Agent on the named product repo with:
     /brooklyn-mode then /poteto-mode investigate <link or paste>
     Done means: control-<app> repro; say whether still broken on main; draft PR only if fix is one unit
     Keep: no Autopilot; no merge; Cursor Models only if Other Models empty; decisions.tsv row
  3. Report: VERIFIED fixed on main | STILL BROKEN | INCONCLUSIVE + why
```

Grok Bot bugs she wants publicly: in-app **Send Feedback** with `poteto poteto poteto` in the text ([feedback ask](https://x.com/poteto/status/2096089814672314420)).

## Related

- [BOTS.md](../automations/grok-bot/BOTS.md) · [outer-loop.md](outer-loop.md) · [TRUST-NEXT.md](TRUST-NEXT.md) · [naming.md](naming.md)
