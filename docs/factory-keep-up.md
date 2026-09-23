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
3. Run `scripts/drift-check.mjs` from the Devin plugins tree against the
   Cursor pack twin checkout in hard-fail mode, every run. The checkout is
   `PLUG_FACTORY_REPO` or `~/Projects/plug-factory`; that naming stays valid.
   A missing checkout is a setup failure to fix, not a step to skip. The
   advisory `--content` pass alone never opens a PR.

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

## Pointer

Language rules and the mirror contract live in
[docs/language-conventions.md](language-conventions.md), Anti-drift.
