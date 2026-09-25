# ZCode full pack surface, design

Date: 2026-09-25

## Problem

The ZCode twin (`Dahhrk/zcode-factory`) carried only a small factory skill set
while the Cursor and Devin twins carried the full `pstack` and
`cursor-team-kit` packs. Three seats meant three different answers to the same
question, and drift had no single source to settle it.

## Decision

Ship the full packs on ZCode and make the mirror a triple.

- Pack write home is `Dahhrk/plug-factory`. Pack substance is authored there.
- `Dahhrk/devin-factory-plugins` and `Dahhrk/zcode-factory` are mirrors of that
  substance, produced by export rather than hand edits.
- ZCode has no plugin namespaces, so exported skills land as flat prefixed
  directories: `skills/pstack-<slug>/` and `skills/cursor-team-kit-<slug>/`.
- `skills/pack-manifest.json` records what was exported so drift can be checked
  without reading every file.
- `factory-baseline` does not go to ZCode. It stays Devin-only.
- Conventions mirrors stay required on every twin.

## Why prefixes and a manifest

Flat prefixes keep the ZCode loader happy while preserving which pack a skill
came from, so an export can be regenerated and compared without guessing
ownership. The manifest gives the drift check a cheap first pass; the nested
compare of the skill trees is the second pass when the manifest looks equal.

## Twin-only files

Each twin needs a little adapt code that the write home does not carry
(loader metadata, twin README, twin drift script). Those paths sit on an
allowlist so the compare does not report them as drift.

## Keep

- Draft PRs only. Dark merges. Autopilot stays off.
- No secrets and no product Feature Maps in the kitchen.
- Hand edits to exported pack skills on a mirror are drift, not a fix. Fix the
  write home and re-export.
