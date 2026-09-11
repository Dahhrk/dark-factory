# SureForge (optional named mode)

Upstream: [Da7-Tech/SureForge](https://github.com/Da7-Tech/SureForge) · skill path `skills/sureforge/` · **1.0.0** · MIT · instruction-only (no runtime gate).

Quality-control workflow for complex multi-step work: research → ask → plan → build → verify, with independent review and evidence-bound gates. Complementary craft — **not** a second factory OS. Adjacent craft peers: [adjacent-craft.md](adjacent-craft.md).

## When to invoke

Harvey (or you) says explicitly:

> Use SureForge standard for this task.  
> Use SureForge full for this task.

| Use | Skip |
|-----|------|
| Multi-file features with real acceptance criteria | Harvey triage / typo / one-liner |
| Decision studies (options, spend, architecture) | Always-on every Cloud Agent spawn |
| Exhaustive visual / PDF / reflow inspection claims | Replacing Feature Maps or Stewie gates |
| High-risk or hard-to-reverse changes | Autopilot unlock / TRUST-NEXT green claims |

## Factory role map

| SureForge role | Dark factory |
|----------------|--------------|
| Owner (sequential implementation) | Tony / Cloud Agent or Devin session |
| Independent reviewer (fresh context) | The Riddler — use reviewer-brief pattern; no owner self-rating in the packet |
| Critic (material dispute / high risk) | Gordon (or human) |
| Scope / spend / publish / merge | Dark plates — author never merges on own verdict |

Done means + Keep on every handoff still applies. SureForge READY is technical readiness, not merge authority.

## Steal (encode these)

| Pattern | What it is | Where it lands |
|---------|------------|----------------|
| Contract + decision log | Original request, amendments, exclusions; skip/timeout ≠ approval | Task ledger in the agent workspace; overnight rows still go to `audit/decisions.tsv` |
| READY / REPAIR / BLOCKED | Evidence-backed gates; max **3 rounds per gate**; exhausted rounds → BLOCKED, not ship | Cloud Agent / Devin reports; Riddler/Gordon packets |
| Fresh-context review | Reviewer gets artifact + contract + plan; withholds owner advocacy and method choices until it picks its own | Riddler handoff; do not count same-chat “second paragraph” as independent |
| Coverage denominator | Enumerate units before claiming 100%; reuse needs recorded applicability | Align with Feature Map / verify evidence; visual claims need real inspection |
| Honest fallbacks | Missing reviewer/tools → `self-review-only` or pause; never relabel reduced assurance as full | Spend / tool outages already common — say what was not checked |

## Already covered — do not duplicate

| SureForge idea | Ours |
|----------------|------|
| Research → plan → build → verify | `/poteto-mode` + Superpowers + Feature Map slices |
| Independent review | Riddler proof → Gordon / Bugbot / `BUGBOT.md` |
| Author ≠ merger | Human plates; authors never merge on own verdict |
| Exhaustive UI / visual | Feature Maps + visual-parity / control-ui |
| Gate scripts / CI | Stewie |

## Skip forever

- Install SureForge as the kitchen OS or always-on Full mode.
- Treat `npx skills add` as proven activation or behavioral compatibility.
- Use SureForge to green Autopilot or skip TRUST-NEXT.
- Put product Feature Maps or secrets in this kitchen.
- Double-stack Full SureForge *and* full Riddler→Gordon ceremony on every typo-sized PR.

## Optional install (product / Devin — not kitchen)

Kitchen documents the path; skill files live on product or user skill dirs.

```bash
# Project install (Cursor + Devin targets)
npx skills add Da7-Tech/SureForge --agent cursor --agent devin -y
```

Manual: copy the whole `skills/sureforge/` folder (SKILL.md + `references/` + `assets/` + LICENSE) into:

| Host | Project directory |
|------|-------------------|
| Cursor | `.agents/skills/sureforge/` or `.cursor/skills/sureforge/` |
| Devin | `.devin/skills/sureforge/` |

Copying only `SKILL.md` is incomplete. Do not overwrite an existing real install for a smoke test. Prefer an isolated project first.

After install, verify discovery in a clean session with an explicit invoke — file copy ≠ activation.

## Evidence honesty

Published pilots (maintainer-held logs; not in-tree): GLM-5.2/Devin adherence and a Grok 4.6 two-arm comparison. The matched **three-arm** efficacy study (no-skill / owner baseline / SureForge) was **unrun** at 1.0.0; release shipped on owner decision ahead of that study. Do not invent superiority metrics.

## Decision

| Need | Reach for |
|------|-----------|
| Align / slice / verify a product feature | `/poteto-mode` + Feature Map (default) |
| Named heavy QC mode | `Use SureForge standard|full` |
| Proof before plate | Riddler → Gordon |
| Overnight / Autopilot | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Related

- [adjacent-craft.md](adjacent-craft.md)
- [pr-workflow.md](pr-workflow.md)
- [evidence-standard.md](evidence-standard.md)
- [spend-and-cloud.md](spend-and-cloud.md)
- [TRUST-NEXT.md](TRUST-NEXT.md)
