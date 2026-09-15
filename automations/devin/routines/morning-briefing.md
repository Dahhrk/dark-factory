# Routine: morning briefing

Harvey standup equivalent. Farm status, do not fix.

1. Read `~/Projects/registry.md` (local sessions) or fetch
   `Dahhrk/dark-factory` docs for the fleet list (cloud sessions).
2. For every repo with a `github:` slug, run `gh pr list --repo <slug> --state open`
   and `gh pr checks` per open PR.
3. Report, in this order:
   - **Blocked on human**: failing required checks, unresolved review
     comments on the human's PRs, drafts awaiting plate
   - **Overnight merges**: `gh pr list --state merged --search "merged:>YYYY-MM-DD"`
     for yesterday
   - **Ledger**: `node scripts/close-loop.mjs status` in the kitchen —
     surface any REPEAT smells
   - **Stale**: open PRs untouched > 3 days
4. Write the briefing to `local/briefing-YYYY-MM-DD.md` in the kitchen and
   print the summary. In cloud sessions, open a draft PR adding the file
   (or skip persistence and print only).
5. If everything is clean, say `briefing: clean` and stop. Do not invent
   work.

Keep: no merges, no autopilot, no fixes — briefing only.
