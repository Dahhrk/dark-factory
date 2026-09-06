# Fleet board (Working → Watching → Ready)

Method distill from the public [Lingxi Engineer Bot](https://x.ai/bot/marketplace/bots/engineer-bot) marketplace memories and the [Grok Bot for Engineering](https://threadnavigator.com/thread/2094493172516966781/) essay. **Inspired by** that eng-supervisor pattern — **adapt, do not install** the marketplace bot as CoS. Keep Harvey / Tony / Riddler / Gordon seats and [TRUST-NEXT.md](TRUST-NEXT.md).

SoT for us: `intake/QUEUE.md` + GitHub PRs (+ optional Notion empty DB later). Do not dual-source without a decision. Never copy another team’s live board rows.

## Stages

| Stage | Means |
|-------|--------|
| **Working** | Actively fixing only: open findings on HEAD, dirty rebase in flight, or a cloud agent currently coding |
| **Watching 1/3 → 2/3 → 3/3** | Waiting on CI, Bugbot/security, proofs, or re-proof — **not** Working |
| **Ready for review** | Four consecutive **CLEAN** ticks complete. Terminal **pre-merge** stage. Route → Riddler → Gordon → **you** |
| **Holding / Blocked** | Parked on human or external blocker |
| **Done** | **Merged only.** Agent finished ≠ Done. User said “done” ≠ merged unless they clearly mean merge |
| **Cancelled** | Abandoned |

Never invent “Waiting for merge” or “Waiting for Bugbot” as stages — those are **Watching**.

## CLEAN (one tick)

A tick is **CLEAN** when:

- CI / required check-runs are green (or not yet required — still wait for them)
- No failing security / Bugbot findings that still need disposition
- No unresolved bot/security review threads that block land
- Tip is mergeable vs default (real conflicts fixed)

**CLEAN ignores** soft “owner approval / code-review-gate” style waits for the ladder math — those still block **you** from merging, but they do not keep a row in Working.

**Ladder:** Working → Watching 1/3 → 2/3 → 3/3 → Ready for review. Four consecutive CLEAN ticks. Never invert. Never stop at 3/3 and call it Ready.

Cadence: on-demand **~30 min** watcher for boarded PRs only (not “list all open PRs”). **P0** short cadence (~5 min) only for true urgency — burns tokens; self-delete when CLEAN/Ready gate hits.

## Board-first + one agent per PR

1. Create the row (**Stage=Working**) **before** dig or launch.
2. **One cloud agent per PR stream.** Reply/steer for rebase, Bugbot, CI, re-proof. Fresh launch only for a **new** task or intentional rewrite.
3. Never re-board another owner’s PR. Watcher never audits unboarded PRs.
4. When mentioning a PR: inline `#N` + review URL.

## Visual proof gate

Before Ready → Riddler:

- Proof must be **real product chrome** (or real `control-*` / hosted artifact).
- **Open the hosted file yourself** (or drive with control CLI). Captions are not proof. White-canvas mocks are not proof.
- Video must **play** (`video/mp4`), not a poster frame.
- Put images/videos in the **PR body** as hosted artifacts — not committed into the branch, not “comment link only.”

Pairs with Control-Glass `anti-ai-ui` / `visual-parity` / Feature Map Looks — those are mechanical; this gate is the **human/bot verification posture**.

## Rebase discipline

- Rebase only on **real merge conflicts**, or when an inherited default-branch CI break is fixed.
- Behind-alone ≠ rebase.
- Confirm mergeability with a **second poll** (or saved poll artifact) before rebasing.

## Map to our seats

| Pattern | Who |
|---------|-----|
| Board row + stage vocabulary | Harvey (overnight/standup) + Tony (spawn) |
| CLEAN ladder / one agent / rebase | Tony |
| Visual open-hosted proof | Riddler (before Gordon) |
| Ready ≠ merge | Gordon reviews; **you** land |
| Jenny-shaped ops (1:1 / postmortem → playbook) | Ted + Strange + Harvey standup — do **not** seat a second CoS |
| Full Autopilot / auto-merge | **Off** until TRUST-NEXT green |

## Skip

- Install Engineer Bot as CoS replacement  
- Essay auto-merge on “confident review”  
- Notion as mandatory SoT  
- Collapsing Riddler into Gordon  
- Nightly “have fun / 200 agents” fleets before trust  

## Lee Robinson (strategic, not day-ops)

[Recursive Model Improvement](https://www.youtube.com/watch?v=q4Tr-DknG2M) (~20m): outer product feedback → better evals; inner RL on hard verifiable tasks; derivative judges raise the floor. For us: **real proof** (Feature Map + control CLI + this visual gate) is the same flywheel quality — keep evidence real. Not a day-ops checklist.

## Related

- [pr-workflow.md](pr-workflow.md) · [outer-loop.md](outer-loop.md) · [TRUST-NEXT.md](TRUST-NEXT.md) · [BOTS.md](../automations/grok-bot/BOTS.md) · [evals.md](evals.md)
