# Self-improve loop (how the factory gets smarter)

This is the operating contract for **structural** learning. Soft skills alone do not self-improve.

## The loop

```text
Every turn captures (record when a correction, failed check, or same workaround happens)
  → second smell of the same workspace+smell
    → encode same day as lint / CI / hook / Feature Map
    → mark the row encode on audit/smells.tsv
Weekly gardener reads audit/smells.tsv via `node scripts/close-loop.mjs status`.
```

Preferred strength order: [quality-ladder.md](quality-ladder.md). Principle: encode-lessons-in-structure.
The ledger is the one writer. Friday is backup. Do not invent inbox rows for Grok bots.

## What is already mechanical (Control-Glass)

| Gate | Command / location |
|------|-------------------|
| Boundaries | `npm run boundaries` + probe |
| Anti-slop / TS footguns | oxlint + `tools/oxlint/anti-slop` |
| Anti AI-template UI | `npm run anti-ai-ui` |
| Soft tropes (mechanical) | cream / near-cream paper, terracotta hex + class, 3-card hero grids (same script) |
| Visual parity (pixel) | `npm run visual-parity` |
| Eyes drive | `npm run ci:drive` or `control-glass` |
| Soft review | `BUGBOT.md` + Bugbot dashboard |
| Always-on UI rule | `.cursor/rules/anti-ai-ui.mdc` |
| Kitchen bootstrap gate pack | `templates/product-bootstrap/gates/` via `scripts/sync-bootstrap-gates.ps1` |

New UI tropes: **second smell → extend `check-anti-ai-ui.mjs`**, not another reminder.
Authors do not certify themselves. That rule still lives on the product (fresh verifier, author does not merge on own verdict).
New pixel regressions: fail parity → fix UI or titled baseline-update PR (never silent PNG edit).

## Cadence

| When | What |
|------|------|
| Every turn | `node scripts/close-loop.mjs record` if a correction / failed check / same workaround |
| Smell #2 | Encode same day, then `node scripts/close-loop.mjs encode` |
| Daily | `/maintain-verification-skill` (automation **Enabled**) |
| Every UI PR | Named direction + Looks + `anti-ai-ui` + `visual-parity` |
| Friday | [encode-lessons-weekly](../automations/cursor/encode-lessons-weekly.md) reads `audit/smells.tsv` |
| After overnight | `/show-me-your-work` → Attention → encode or kill |

## What agents cannot invent

Taste, product priority, spend, merge rights, Slack credentials. Humans set references (Design Mode / baseline images); agents implement and prove.

## Trust curve (do not skip)

1. Watch one loop  
2. One overnight you would merge by hand — [TRUST-NEXT.md](TRUST-NEXT.md) (Control-Glass; Cursor Models OK if Other Models empty)  
3. Parallel Cloud Agents  
4. Limited Autopilot  
5. Dark factory scale  

Outer-loop triage recipe: [triage-subscribe.md](triage-subscribe.md). Spend / self-host: [spend-and-cloud.md](spend-and-cloud.md).

## Related

- [CURSOR-SETTINGS.md](CURSOR-SETTINGS.md) · [STILL-YOU.md](STILL-YOU.md)  
- [design-notes.md](design-notes.md) · [visual-parity.md](visual-parity.md)  
- [adjacent-growth.md](adjacent-growth.md) — measure → promote → playbook (growth layer)
- [adjacent-craft.md](adjacent-craft.md) — domain glossary / deepen survey (Matt patterns; not a second OS)  
- [nine-layers.md](nine-layers.md) layer 8 · [SETUP-STATUS.md](SETUP-STATUS.md)  
