# Routine: context farm

Outer-loop intake — find what to work on next, do not start it.

1. Fleet list from `~/Projects/registry.md` (`github:` slugs).
2. Collect signals:
   - `gh issue list --repo <slug> --state open` per repo
   - `gh search issues --mention @me --state open` and review requests
   - New GitHub notifications: `gh api notifications`
   - Repo advisories: `gh api repos/<slug>/dependabot/alerts` where enabled
3. Triage each signal into `intake/QUEUE.md` in the kitchen: one line per
   item - repo, what it is, why it matters, suggested routine/skill.
   Dedupe against lines already present.
4. Open a draft PR appending new queue lines. Nothing gets started from
   this routine — the queue is the output.
5. No signals = `context-farm: clean`, no PR.

Keep: intake only. Never branches, never Autopilot, never merges.
