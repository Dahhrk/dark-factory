# Factory keep-up

Standing routine that keeps the factory repos aligned.

## Twins

- Kitchen: `Dahhrk/dark-factory`.
- Devin plugin pack: `Dahhrk/devin-factory-plugins`.
- Cursor pack twin: `Dahhrk/plug-factory` (private). Packs live at repo root:
  `pstack/`, `cursor-team-kit/`.

The twins carry shared conventions and overlapping packs, skills, and rules.
They stay mirrored.

Product repos consume packs only. They do not host factory conventions.
DevinGo stays `Dahhrk/devin-go` only (not the kitchen, not the plugin pack).

## Cadence

Weekdays, 10:30 AM Europe/London. Silent when clean: no report when the
twins agree and no drift is found.

## What runs

1. Refresh all three mains from GitHub, including `Dahhrk/plug-factory`.
2. Compare convention mirrors. At minimum
   `docs/language-conventions.md` in the kitchen against
   `plugins/factory-baseline/rules/language-conventions.md` in the plugin
   pack.
3. Run `scripts/drift-check.mjs` in hard-fail mode every run. Prefer the
   Devin plugins tree against the Cursor pack twin checkout
   (`PLUG_FACTORY_REPO` or `~/Projects/plug-factory`). The reverse check can
   also run from `plug-factory` once its scripts exist, or from the Devin
   tree with `PLUG_FACTORY_REPO` set. A missing checkout is a setup failure
   to fix, not a step to skip. The advisory `--content` pass alone never
   opens a PR. Devin CI uses `secrets.PLUG_FACTORY_TOKEN` (or
   `PLUG_FACTORY_READ_TOKEN`) when set; otherwise it falls back to public
   `Dahhrk/plugins` with a warning so the job is not bricked.

## On unexplained drift

Open a mirror PR on the lagging twin. Never merge without Dark.

When both sides carry conflicting edits, do not pick a winner. Ask which one
wins, then mirror that choice.

## Never

- Merge without Dark.
- Post publicly outside the PR.
- Enable Autopilot.
- Put secrets in the kitchen.
- Invent evidence.

## Code defaults

Shipping bar for both lanes: [docs/factory-code-defaults.md](factory-code-defaults.md).

## Pointer

Language rules and the mirror contract live in
[docs/language-conventions.md](language-conventions.md), Anti-drift.
