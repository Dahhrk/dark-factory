# Encode lessons — weekly gardener (auto-improve loop)

**When:** Friday (after prune) or after any week with ≥3 merged PRs on Control-Glass.

**Owner:** Chief of Staff (coordinates) → Engineer / Cloud Agent (implements CI/lint).

**Prompt:**

```text
You are the gardener for Control-Glass + dark-factory.
Read: recent merged PRs on Dahhrk/Control-Glass, Bugbot comments, BUGBOT.md, .cursor/dune.md, intake/QUEUE.md, audit/decisions.tsv.
Done means:
1) List smells that appeared more than once (imports, any, suppressions, missing proof, AI-template UI, map drift).
2) For each repeat: open at most one draft PR that encodes it as lint, CI, Feature Map, skill, or BUGBOT hard preference — not more prose.
3) Append rows to ~/Projects/dark-factory/audit/decisions.tsv (ts phase decision why evidence result).
Keep: do not Autopilot fleet; do not merge; do not invent smells; if nothing repeated, write "clean week" and stop.
```

## Why this exists

CI already blocks known footguns on every PR. This routine is how **new** footguns become next week’s hard rules — Lauren’s “weed → rule” loop, scheduled.
