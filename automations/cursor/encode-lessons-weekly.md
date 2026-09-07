# Encode lessons — weekly gardener (auto-improve loop)

**When:** Friday (after prune) or after any week with ≥3 merged PRs on Control-Glass.

**Owner:** Chief of Staff (coordinates) → Engineer / Cloud Agent (implements CI/lint).

**Prompt:**

```text
You are the gardener for Control-Glass + dark-factory.
Working directory: kitchen root (~/Projects/dark-factory).
Done means:
1) Run `node scripts/close-loop.mjs status`. Those REPEAT rows are the queue.
2) For each REPEAT: encode it as lint, CI, hook, or Feature Map — not more prose. Then `node scripts/close-loop.mjs encode --workspace <slug> --smell <slug> --evidence <what landed>`.
3) Append a row to audit/decisions.tsv only when a gate lands (ts phase decision why evidence result).
4) If status is empty: write "clean week" and stop.
Keep: do not Autopilot fleet; do not merge; do not invent smells.
```

## Why this exists

CI already blocks known footguns on every PR (`anti-ai-ui`, `visual-parity`, boundaries, anti-slop). This routine is how leftover REPEATs in `audit/smells.tsv` become next week’s hard rules. Same-day encode is the main path. Friday is backup.

Cadence + trust curve: [docs/SELF-IMPROVE.md](../../docs/SELF-IMPROVE.md).
