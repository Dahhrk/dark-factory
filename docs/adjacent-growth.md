# Adjacent growth patterns (not pstack core)

Method distill from public [ericosiu/ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) and the [Single Brain](https://singlebrain.com/) architecture pitch. **Inspired by** those OSS / product surfaces — not affiliated, and **not** a substitute for pstack, `verify-*`, or Control-Glass trust overnight.

Do **not** clone the whole marketing fleet into a product repo. Cherry-pick patterns when you have a growth / signal / copy decision. Keep revenue connectors and PII out of this public kitchen.

## Four patterns worth stealing

### 1. Signal intelligence (PSSI-shaped)

Source: `personal-strategic-signal-intelligence` in the marketing-skills repo.

| Rule | Kitchen translation |
|------|---------------------|
| Attention ≠ conviction | A save/bookmark is weak. Notes, decisions, builds, measured outcomes are strong. |
| Lineage before synthesis | Every material claim cites primary sources. Prior summaries are not new evidence. |
| Private inferred beliefs stay labeled | Infer for yourself; do not publish as fact without confirmation. |
| Decision first, content second | Ask what decision / experiment / build the signal informs. Posts are downstream. |
| Weekly or event-triggered review | No timer spam. One compact weekly brief, or review when a cluster / contradiction / application lands. |

**Done means (weekly brief):** attention vs conviction table, one candidate decision with a reversible test, one contradiction (or “none”), one bounded next action with owner + metric + stop, citations. Log a row in `audit/decisions.tsv` if it changes factory aim.

**Bookmark → build ladder:** `save → read → annotate → synthesize → specify → build → measure`. Do not jump save → ship.

### 2. Expert panel score before promote

Source: content-ops / autoresearch expert panels (default pass ~90/100).

Same shape as [evals.md](evals.md) and pstack arena judges, aimed at **copy / landing / offer** text — not at `verify-glass`.

| Gate | Action |
|------|--------|
| &lt; 70 | Do not ship. Positioning is wrong, not wording. |
| 70–79 | One more round on the weakest dimension. |
| 80–84 | Shippable; validate with real traffic / real users. |
| 85–89 | Strong. |
| 90+ | Rare. Ship. |

**Keep:** batch-score variants in one judge pass (calibration). Different model family for the judge when possible. For product UI, still use Elaya + `anti-ai-ui` + visual-parity — this panel does not replace them.

**When:** optimizing a landing hero, CTA, or outbound draft. **Not** for Control-Glass Feature Map / control CLI changes (use evals).

### 3. Measure → promote → playbook

Source: growth-engine (hypothesis, log metrics, score, auto-promote winners).

Kitchen already says encode lessons in structure. Growth-engine makes the loop explicit:

1. State a falsifiable hypothesis and metric.
2. Run a bounded experiment (A/B or small batch).
3. Score with real stats when you have data; do not promote on vibes.
4. Promote winners into a living playbook (skill, lint, Feature Map Looks, or ops doc).
5. Suggest the next untested variable — do not restart from zero.

Pairs with [SELF-IMPROVE.md](SELF-IMPROVE.md) and Friday encode-lessons. Second smell of the same win → lint/CI/skill, not a third reminder.

### 4. One brain + specialist fleet + trust bar

Source: Single Brain pitch (ambient CoS → commander → specialists; SSR = security, stability, reliability).

Already mirrored here: Grok Bot / Harvey as coordinate layer, Cursor Cloud Agents as workers, [TRUST-NEXT.md](TRUST-NEXT.md) as the reliability bar. Steal the **framing**, not the vendor:

- One trusted interface for the human.
- Specialists for domain work (do not make the CoS write product code).
- Isolation between “clients” / products (kitchen public vs private apps).
- Trust before magic — speed under reliability.

Do **not** enable Benny, Autopilot, or Orchestrate from this page.

## What not to import

| Pack surface | Why skip for this factory |
|--------------|---------------------------|
| Sales / outbound / RB2B / Gong pipelines | Revenue ops + secrets; wrong layer |
| SEO / podcast / YouTube packaging factories | Content volume tools; optional later private marketing repo |
| Full `ai-marketing-skills` clone into Control-Glass | Dilutes product eyes |
| Single Brain as pstack replacement | Different product; keep pstack + verify |

## Decision

| Need | Reach for |
|------|-----------|
| Product UI + proof | `verify-*` + Feature Map + visual-parity |
| Landing look | [adjacent-taste.md](adjacent-taste.md) (Elaya) |
| Skill / map change quality | [evals.md](evals.md) |
| Copy hillclimb before traffic | Expert panel pattern above |
| Weekly personal / ops signal brief | Signal intelligence pattern above |
| Repeated growth win | Measure → playbook → encode-lessons |
| CoS / fleet shape | Existing bot roster + TRUST-NEXT |

## Sources

- [ericosiu/ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) (MIT)
- [singlebrain.com](https://singlebrain.com/) (architecture pitch; commercial)
- Related kitchen: [evals.md](evals.md) · [adjacent-taste.md](adjacent-taste.md) · [SELF-IMPROVE.md](SELF-IMPROVE.md) · [outer-loop.md](outer-loop.md) · [TRUST-NEXT.md](TRUST-NEXT.md)
