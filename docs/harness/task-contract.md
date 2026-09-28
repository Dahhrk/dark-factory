# Task contract

Mandatory fields for every handoff. Required for intake QUEUE items, Cloud Agent handoffs, Devin handoffs, peer-kitchen handoffs, and overnight task queues.

Fill the template before work starts. Incomplete contracts stay in inbox.

## Required fields

| Field | Means |
|-------|--------|
| `objective` | One outcome in plain language. |
| `inputs` | Paths, PRs, URLs, ledgers, or prior receipts the agent must read. |
| `constraints` | Keep lines: Autopilot off, no secrets, spend cap, draft-only, and so on. |
| `deliverable` | What lands: files, PR, receipt, QUEUE update. |
| `done_when` | Checkable predicate (command, CI, artifact, or ledger row). Same idea as poteto **Done means**; see [one-shot-task.md](../one-shot-task.md). |
| `approval_required` | What needs Dark (or named owner) before acting. Empty only when nothing irreversible. |

## YAML example

```yaml
objective: Add harness contract docs under docs/harness and open a kitchen PR.
inputs:
  - docs/factory-keep-up.md
  - docs/TRUST-NEXT.md
  - docs/quality-ladder.md
constraints:
  - Autopilot off
  - No merge; leave for Harvey or Dark
  - Prefer gh API; avoid cloning the kitchen onto the box if avoidable
  - No em dashes; no AI attribution in PR title, body, or tip commit
deliverable: Branch docs/kitchen-harness-contracts with five markdown files and thin index links; open PR.
done_when: PR URL exists; files present under docs/harness/; factory-gate attribution and kitchen-ci pass or are pending on self-hosted runners.
approval_required:
  - Merge
  - Public posts outside the PR
  - Spend past Cursor cap
```

## Intake QUEUE shape

When promoting a QUEUE row to ready, the row (or its linked brief) must carry the six fields above. A title alone is not a contract.

## Overnight queues

Overnight items need `done_when` that a morning plate can verify without re-running the whole task. Prefer CI, `control-*`, or a receipt over chat summary.
