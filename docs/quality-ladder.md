# Quality enforcement ladder

**SELF-REPORTED** theme across talks + **VERIFIED** in principles (`encode-lessons-in-structure`). Prose is the weakest long-term enforcement.

Preferred order (strongest → weakest):

1. **Architecture** that makes the right action natural ([dune-method.md](dune-method.md), [organic-architecture.md](organic-architecture.md)).
2. **Types / data structures** that make illegal states hard or impossible ([principles.md](principles.md) type-system-discipline).
3. **Compiler, static analysis, lint, import boundaries, CI.**
4. **Executable scripts and control tools** ([atlas-control.md](atlas-control.md), Build the Lever).
5. **Hooks** that block risky actions or inject required context ([Cursor hooks docs](https://cursor.com/docs/hooks)).
6. **Skills and playbooks** ([pstack-inventory.md](pstack-inventory.md)).
7. **Documentation and reminders.**
8. **Human review comments.**

When the same review comment appears **twice**, treat it as a system-design signal. Encode the invariant closer to the code — do not add a third reminder.

`/reflect` separates: prompt/skill improvements · tooling/lint · rejected anecdotes · backlog ([automate-me.md](automate-me.md) for personal mode). Blinded skill changes: [evals.md](evals.md).

## Related

- [nine-layers.md](nine-layers.md) layer 8  
- [principles.md](principles.md) encode-lessons-in-structure  
- [why-throughput.md](why-throughput.md)  
