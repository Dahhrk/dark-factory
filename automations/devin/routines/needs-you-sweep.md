# Routine: needs-you sweep

Only human blockers — nothing else surfaces.

1. Fleet list from `~/Projects/registry.md` (`github:` slugs).
2. Per repo, collect only:
   - Open PRs with a **failing required check** (`gh pr checks` — required
     contexts red)
   - PRs with **unresolved review comments** addressed to the human or
     requested changes
   - Draft PRs **green and awaiting plate** (the human merges, not us)
   - Issues assigned to or mentioning the human (`gh issue list --assignee @me`)
3. Output a table: repo | item | why it needs a human | link.
   Write to `local/needs-you-YYYY-MM-DD.md` and print.
4. Empty table = `needs-you: clean`. Stop. Do not fix anything, do not
   comment on PRs, do not merge.

Keep: this is a read-only sweep. It never mutates PRs, issues, or branches.
