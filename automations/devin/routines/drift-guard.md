# Routine: drift guard

Weekly parity audit across the factories — runs Friday before encode so
structural lessons land in the same sweep.

Repos: `~/Projects/devin-factory-plugins` (Devin packs) and
`~/Projects/plug-factory` (Cursor packs). Upstream: `cursor-plugins-upstream`
(clone of github.com/cursor/plugins).

## Steps

1. Structural check, both directions:
   `node scripts/drift-check.mjs ~/Projects/plug-factory` in
   devin-factory-plugins, and the reverse in plug-factory. Any FAIL line is
   real drift — fix it this run.
2. Content check, both directions: same commands with `--content`.
   Triage each warning:
   - Platform adaptation (`.devin/` vs `.cursor/` paths, `rules/pstack-models.md`
     vs `~/.cursor/rules/pstack-models.mdc`, model slugs, profile names,
     pronouns, condensed prose) — expected, no action.
   - A command, path, glob, format contract, or numbered step present on one
     side only — real drift. Port it, preserving the target platform's
     mechanics (run_subagent profiles on Devin, Task/subagent_type on Cursor).
3. Platform leaks are already hard-fails in step 1's run — anything flagged
   `platform leak` gets fixed, never documented around.
4. Upstream watch: `node scripts/upstream-watch.mjs --days 35` in the
   kitchen. New upstream files → port candidates; upstream model bumps or
   behavior changes → list for the operator, do not auto-adopt.
5. Real drift ships as paired draft PRs on both repos. Intentional diffs
   that keep warning get a `PLATFORM_EQUIV` normalization in
   `drift-check.mjs` or a comment in the file — not a third triage.
6. Append one row to `audit/decisions.tsv` per fix. Clean run =
   `drift-guard: clean`, no PR.

Keep: draft PRs only, no merges, no Autopilot. Version-bump any pack whose
content changed.
