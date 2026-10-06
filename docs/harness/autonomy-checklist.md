# Autonomy checklist

Eleven yes/no questions before widening autonomy (new overnight, playbook, GitHub Action, or fleet expansion).

If more than two answers are **no**, do not widen blast radius. Fix the gaps first. Autopilot stays off until [TRUST-NEXT.md](../TRUST-NEXT.md) is green and Dark enables it.

## Questions

Answer yes or no. Count the nos.

1. **Success defined?** Is there a clear `done_when` (task contract) for the widened scope?
2. **Find context without loading everything?** Can the agent resolve pointers (Feature Map, AGENTS, skills, QUEUE) instead of dumping the whole tree?
3. **Tools have purpose, schema, and failure?** Does each tool say what it does, what it expects, and how failure looks?
4. **Decisions outside chat?** Do durable choices land in ledgers, PRs, or contracts rather than vanishing in thread?
5. **Completion needs evidence?** Does done require CI, control CLI, artifacts, or receipts (not model claims)?
6. **Risky actions gated?** Are public posts, spend past cap, kitchen secrets, Devin org prefs, and inventing evidence blocked without asking?
7. **Retry limits?** Is there a hard stop on flake retries and loop spins?
8. **Resume after interrupt?** Can work restart from branch, QUEUE, or receipt without redoing everything?
9. **Reconstruct actions?** Can a morning plate see what changed from git, CI, and receipts?
10. **Failure improves infrastructure?** Does a repeat failure become a rule, gate, fixture, permission, or kit encode ([failure-to-infrastructure.md](failure-to-infrastructure.md))?
11. **Rollback fast?** Can you revert the PR, disable the Action, or park the QUEUE row safely in about 15 seconds? This is a hard ship rule: if a revert takes more than about 15 seconds, reshape or split the change before it merges.

## Rule

- **0 to 2 nos:** Widening may proceed within stated constraints.
- **3 or more nos:** Do not widen. Encode or gate first.
- **No on item 11:** Do not merge, whatever the count. Reshape or split the change until a revert takes about 15 seconds or less.

## Related

[task-contract.md](task-contract.md) · [run-receipt.md](run-receipt.md) · [TRUST-NEXT.md](../TRUST-NEXT.md) · [fleet-board.md](../fleet-board.md) · [SELF-IMPROVE.md](../SELF-IMPROVE.md)
