# Assistant memory hygiene (operating encode)

Sources (public): [@Michael_Fenech_ memory cleanup protocol](https://x.com/Michael_Fenech_/status/2103884805108854799). Scraped 2026-09-27. Operating pointer only; not a product memory schema and not a pack smell invent.

Thesis: assistant memory is **discrete written notes**. Changing a rule without removing the old note leaves **stacked versions**. Volume can make consistency worse, not better. Cleanup is a human-gated protocol; the agent proposes, the human approves deletes.

## When to invoke

> Group by topic. Propose deletes. Wait for approval. Do not stack replacements.

| Use | Skip |
|-----|------|
| Rules feel inconsistent or "old version still wins" | Deleting memories without human approval |
| Human says a new rule replaces an old one | Blind bulk purge of all notes |
| Periodic hygiene pass on assistant memory | Inventing kitchen memory handlers or pack smells |
| Act-without-asking permissions may be stale | Putting secrets or private product maps in kitchen docs |

## Cleanup protocol

Do not delete until the human approves. One topic at a time.

1. **Read all memories** that apply, including notes that need search or browsing to surface (not only the first page of a list).
2. **Group by topic** (one concern per group: e.g. merge policy, spend, overnight, tool defaults).
3. **For each topic, show three buckets:**
   1. **Current rule** - the version to keep.
   2. **Older / conflicting versions to delete** - stale or contradictory notes.
   3. **Unsure** - needs human call; do not auto-delete.
4. **Flag** any memory that grants **act-without-asking** (merge, spend, message send, Autopilot-shaped permissions). Call these out explicitly.
5. **Go one topic at a time.** Present the three buckets, then **wait for approval** before changing anything for that topic.
6. **After approval:** keep the current rule; delete only the approved stale / conflicting notes.
7. **End** with a short **cleaned rules list** for the topics touched (what remains, not a dump of every historical note).

## Standing habit

When the human says **"This replaces the old rule,"** delete (or propose delete of) the old version instead of stacking another note. Prefer one current rule per topic.

## Already covered (do not duplicate)

| Idea | Ours |
|------|------|
| Academic agentic memory (name collision note) | [jev-mem-research.md](jev-mem-research.md) |
| Decision / smell ledger (factory, not chat memory) | `audit/decisions.tsv` · `audit/smells.tsv` |
| Thin harness / fat skills | [thin-harness-fat-skills.md](thin-harness-fat-skills.md) |
| Overnight / Autopilot gate | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Remaining / not factory work

| Topic | Status | Factory action |
|-------|--------|----------------|
| Live cleanup pass on a specific assistant | Human-gated when asked | Follow this protocol; do not invent |
| New memory product / handlers in kitchen | Forbidden | Do not invent |
| New pack smells from this encode | Skip | Wait for `audit/smells.tsv` repeats |
| Enabling Autopilot from memory hygiene | Forbidden | [TRUST-NEXT.md](TRUST-NEXT.md) stays the gate |

## Related

- [jev-mem-research.md](jev-mem-research.md)
- [assistant-graph-vs-chain.md](assistant-graph-vs-chain.md)
- [assistant-speed-harness.md](assistant-speed-harness.md)
- [thin-harness-fat-skills.md](thin-harness-fat-skills.md)
- [TRUST-NEXT.md](TRUST-NEXT.md)
- [adjacent-craft.md](adjacent-craft.md)
