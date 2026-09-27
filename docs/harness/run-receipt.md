# Run receipt

Closed-increment receipt. Fill after the work and before asking for merge or plate.

Every claim under VERIFIED must be harness-provable (tests, CI check-runs, control CLI output, hosted artifacts, ledger rows). Model claims are not evidence.

## Template

```text
OBJECTIVE:
CHANGED:
VERIFIED:
NOT VERIFIED:
RISKS:
APPROVAL NEEDED:
```

## Field guide

| Field | Write |
|-------|--------|
| OBJECTIVE | Restate the contract objective in one or two lines. |
| CHANGED | Paths, PRs, QUEUE rows, or ledger rows touched. |
| VERIFIED | Commands run, CI names, artifact URLs, or script exits that prove the claim. |
| NOT VERIFIED | What you did not run or could not prove. Be explicit. |
| RISKS | Blast radius, flaky gates, twin drift, spend, or merge hazards. |
| APPROVAL NEEDED | Merge, public post, spend, secrets, org prefs, or none with reason. |

## Example (trimmed)

```text
OBJECTIVE: Add docs/harness contracts and open a kitchen PR.
CHANGED: docs/harness/*; thin links in docs/operating-manual.md and docs/factory-keep-up.md; PR on docs/kitchen-harness-contracts.
VERIFIED: gh api contents lists the five files; PR opened; no em dash in title/body/tip commit (local scrub).
NOT VERIFIED: Self-hosted kitchen-ci / factory-gate may still be queued on the runner.
RISKS: Link targets only; no pack or automation change.
APPROVAL NEEDED: Merge (Harvey or Dark). No public post. No spend past cap.
```

## Related

[task-contract.md](task-contract.md) · [evidence-standard.md](../evidence-standard.md) · [pr-workflow.md](../pr-workflow.md) · [fleet-board.md](../fleet-board.md)
