# Effort dial and prompting deltas (adjacent encode)

Sources (public): [@trq212 “Spending your effort”](https://x.com/trq212/status/2103576349499855160) ([blog](https://claude.dev/blog/spending-your-effort/)) · [@sairahul1 Opus 5.5 prompting masterclass](https://x.com/sairahul1/status/2103430801866240278). Scraped 2026-09-27.

Thesis: **effort** is a compute / verification budget, not a quality slogan. Pair low effort for in-loop iteration with high effort for edgecase verification. Drop obsolete “think harder” crutches on models that already reason. Complementary to [prompting-model.md](prompting-model.md) and [pstack-ama-ops.md](pstack-ama-ops.md) — **not** a second prompting OS and **not** Autopilot unlock.

## When to invoke

> Interview → implement low → review → verify high. Start medium; climb only when measured short.

| Use | Skip |
|-----|------|
| Choosing reasoning / effort for a wave | Max effort on every trivial edit |
| Follow-ups re-litigating settled answers | Vendor billing-UI tips as kitchen Keep |
| Long agent runs stopping on a progress note | Inventing pack smells from a tip list |
| Time-boxed research / verify passes | Replacing Done means with a soft time wish only |

## Steal (encode these; do not re-research)

| Pattern | What it is | Where it lands here | When |
|---------|------------|---------------------|------|
| **Effort = verification budget** | Higher effort → more independent judgment, edgecase tests, adversarial self-review; does not fix a wrong approach | `/setup-pstack` reasoning map; day SE vs security/brownfield | Before burning max on routine features |
| **Interview → low implement → high verify** | Spec interview, build on low/medium, then high-effort verify/test | Inner-loop habit beside `/poteto-mode` | Feature work with a human in the loop |
| **Start medium; climb on measured miss** | Default medium can match older high on coding/knowledge benches; raise one notch only when short | Model / spend defaults; AMA “defaults may be too hot” | Usage pressure |
| **Drop “think step by step” filler** | Newer models already think; filler wastes tokens | System prompts / skills hygiene | Prompt edits |
| **Settled answers stay settled** | Tell the model earlier decisions are closed unless analysis needs reopen | Long threads; optional skill line | Follow-up latency |
| **Checklist beats progress-as-done** | Long tasks: explicit remaining checklist so a progress update is not a finish line | Done means + intake predicates | Multi-step autonomous runs |
| **Time budget (advisory)** | State a time budget or “time matters…”; harness still owns hard timeout | Cloud / bot harness timeouts + brief field | Research teams / overnight predicates |
| **Name banned design defaults** | List concrete UI defaults to avoid; “not generic AI” alone is weak | [adjacent-taste.md](adjacent-taste.md) · product DESIGN | UI prompts |
| **One agents file when possible** | Prefer a single shared agents instruction file across tools when the CLI supports fallback | Product `AGENTS.md` / kitchen AGENTS | Multi-agent desks |

## Already covered — do not duplicate

| Tip | Ours |
|-----|------|
| Outcome + check | [prompting-model.md](prompting-model.md) |
| Role → model / budget setup | [pstack-ama-ops.md](pstack-ama-ops.md) · [spend-and-cloud.md](spend-and-cloud.md) |
| Blinded skill evals | [evals.md](evals.md) |
| Anti-slop / taste | [adjacent-taste.md](adjacent-taste.md) · visual-parity |
| Autopilot / overnight | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Remaining / not factory work

| Topic | Status | Factory action |
|-------|--------|----------------|
| Vendor usage-reset buttons / banked quotas | Product UI only | Do not encode as kitchen OS |
| Mid-session effort cache flag names | Vendor API detail | Link out; do not fork API into kitchen |
| Reasoning-extraction refusal categories | Vendor safety | Note in skills hygiene if a prompt breaks; no new gate invent |

## Related

- [prompting-model.md](prompting-model.md)
- [spend-and-cloud.md](spend-and-cloud.md)
- [pstack-ama-ops.md](pstack-ama-ops.md)
- [evals.md](evals.md)
- [adjacent-craft.md](adjacent-craft.md)
