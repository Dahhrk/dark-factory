# Triage subscribe

Outer-loop recipe: a bot **watches** a channel or feedback inbox, then kicks a **triage agent** that repros with the product control CLI and reports whether main is still broken.

## Pattern

| Step | What |
|------|------|
| Subscribe | Grok Bot / fleet routine on a real channel or feedback source |
| Wake | Keyword or phrase (pick one; keep it boring) |
| Mode | `/brooklyn-mode` → `/poteto-mode` on the product repo |
| Eyes | `control-<app>` repro (e.g. `control-glass`) |
| Verdict | Still broken on **main**? VERIFIED fixed / STILL BROKEN / INCONCLUSIVE |

Bots **coordinate**. Agents **investigate + repro**. Humans merge.

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

## Related

- [BOTS.md](../automations/grok-bot/BOTS.md) · [outer-loop.md](outer-loop.md) · [TRUST-NEXT.md](TRUST-NEXT.md) · [naming.md](naming.md)
