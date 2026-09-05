# Self-improve loop (how the factory gets smarter)

This is the operating contract for **structural** learning. Soft skills alone do not self-improve.

## The loop

```text
Smell (review / Bugbot / screenshot / overnight Attention)
  → appeared twice?
    → encode as architecture / type / lint / CI / hook / Feature Map / skill
    → next agent hits a red wall
```

Preferred strength order: [quality-ladder.md](quality-ladder.md). Principle: encode-lessons-in-structure.

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
| Daily | `/maintain-verification-skill` (automation **Enabled**) |
| Every UI PR | Named direction + Looks + `anti-ai-ui` + `visual-parity` |
| Friday | [encode-lessons-weekly](../automations/cursor/encode-lessons-weekly.md) — gardener draft PRs |
| After overnight | `/show-me-your-work` → Attention → encode or kill |
| Smell #2 | Same day: extend the gate |

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
- [lauren-design.md](lauren-design.md) · [visual-parity.md](visual-parity.md)  
- [nine-layers.md](nine-layers.md) layer 8 · [SETUP-STATUS.md](SETUP-STATUS.md)  
