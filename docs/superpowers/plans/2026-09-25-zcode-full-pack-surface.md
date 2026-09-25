# ZCode full pack surface, plan

Date: 2026-09-25

Design: [2026-09-25-zcode-full-pack-surface-design.md](../specs/2026-09-25-zcode-full-pack-surface-design.md)

## Steps

1. Confirm `Dahhrk/plug-factory` is the pack write home and that `pstack/` and
   `cursor-team-kit/` at its repo root hold the current pack substance.
2. Add the export pipeline in the write home:
   `node scripts/export-packs.mjs --target zcode` and
   `node scripts/export-packs.mjs --target devin`.
3. Export to ZCode as flat prefixed skills `skills/pstack-<slug>/` and
   `skills/cursor-team-kit-<slug>/`, and write
   `skills/pack-manifest.json` alongside them.
4. Keep `factory-baseline` out of the ZCode export. It remains Devin-only.
5. Keep the conventions mirrors in place on all three twins.
6. Extend drift checking: compare `skills/pack-manifest.json` first, then run a
   nested compare of the exported skill trees. Allowlist twin-only adapt files.
7. Update the keep-up routine so a plug pack edit is followed by a regenerate
   and mirror PRs on the lagging twins.
8. Update kitchen docs: `docs/factory-keep-up.md` and
   `docs/devin-factory-plugins.md`.

## Done means

- ZCode carries the full `pstack` and `cursor-team-kit` skills under the
  prefixed layout, with a `pack-manifest.json` that matches the write home.
- A pack edit in `Dahhrk/plug-factory` followed by the export command produces
  matching twins, and the drift check is clean.
- `factory-baseline` is absent from ZCode.

## Keep

- Draft PRs only. Dark merges. Autopilot stays off.
- Never hand edit exported pack skills on a mirror.
- No secrets, no product Feature Maps in the kitchen.
