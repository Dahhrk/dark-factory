# Kitchen harness contracts

Short contracts for factory handoffs, closed increments, autonomy, and encode-after-failure. Use these before expanding overnight work, playbooks, Actions, or fleet scope.

Craft ideas here track public harness essays (thin loop, evidence, encode repeats). This is kitchen practice, not a branded product.

## Pieces

| Doc | Use when |
|-----|----------|
| [task-contract.md](task-contract.md) | Opening any handoff or intake QUEUE item |
| [run-receipt.md](run-receipt.md) | Closing an increment before merge or plate |
| [autonomy-checklist.md](autonomy-checklist.md) | Before widening blast radius |
| [failure-to-infrastructure.md](failure-to-infrastructure.md) | After repeated agent failures |

## Map to factory practice

- **Done means** on every handoff. Checkable predicates, not vibes. See the task contract `done_when` field.
- **Evidence before merge.** CI green, control CLI, hosted artifacts, or gate output. Model claims alone do not count. See [evidence-standard.md](../evidence-standard.md) and [run-receipt.md](run-receipt.md).
- **Harvey may auto-merge** factory kit, twin, and kitchen PRs when CI is green and the change is within that keep-up scope. Product merges stay human-plated unless Dark says otherwise. See [factory-keep-up.md](../factory-keep-up.md) and [fleet-board.md](../fleet-board.md).
- **Autopilot stays off** until [TRUST-NEXT.md](../TRUST-NEXT.md) is green and Dark enables it.
- **Never without asking:** public posts outside the PR, spend past the Cursor cap, invent evidence, put kitchen secrets in tracked files, change Devin org prefs.

## Related

[one-shot-task.md](../one-shot-task.md) (default entry; Done means ≡ `done_when`) · [prompting-model.md](../prompting-model.md) · [operating-manual.md](../operating-manual.md) · [quality-ladder.md](../quality-ladder.md) · [SELF-IMPROVE.md](../SELF-IMPROVE.md) · [language-conventions.md](../language-conventions.md)
