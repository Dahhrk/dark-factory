---
name: verify-factory
description: Prove the dark-factory kitchen still works — plugins, layout, queue, overnight contract.
---

# Verify the kitchen

This skill verifies **dark-factory**, not a product app. For a product repo, run `/create-verification-skill` there.

## Launch

No server. Working directory is the dark-factory repo root.

## Doctor

All of these must exist:

- `README.md`
- `docs/operating-manual.md`
- `docs/outer-loop.md`
- `docs/dune-method.md`
- `intake/QUEUE.md`
- `audit/decisions.tsv` (header row: `ts phase decision why evidence result`)
- `audit/smells.tsv` (header row: `ts source workspace smell n action evidence`)
- `.cursor/rules/factory-os.mdc`
- `.cursor/rules/overnight.mdc`

`node scripts/close-loop.mjs doctor` must exit 0.

Report missing paths as `BLOCKED`.

## Drive

1. Read `intake/QUEUE.md`. Count rows in inbox / ready / done. Count blocked only if that heading exists.
2. Confirm `audit/decisions.tsv` still has the header `ts	phase	decision	why	evidence	result` and is tab-separated.
3. Ask the user (or check chat) whether `/add-plugin pstack` and `/add-plugin cursor-team-kit` have been run. If unknown, mark `INCONCLUSIVE` for plugins — do not invent a yes.

## Evidence

Return a short table: path → present/missing, queue counts, plugin status, and the overnight contract quoted from `README.md`.

## Cleanup

None. Do not delete queue rows or decision-log lines.
