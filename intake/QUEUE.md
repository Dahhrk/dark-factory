# Intake queue

## inbox

### [inbox] Confirm spend cap
- done means: Cursor billing shows an on-demand spend cap
- owner: you

### [inbox] Enable Bugbot on Control-Glass
- done means: cursor.com/dashboard Bugbot lists Dahhrk/Control-Glass enabled
- owner: you

### [inbox] Paste Grok Bot daily maintain (optional)
- source: automations/grok-bot/PASTE-NOW.md
- done means: routine exists in Grok Bot and one dry-run completed
- owner: you

### [inbox] First overnight (limited)
- playbook: autonomous run
- goal: one overnight predicate on Control-Glass
- done means: audit/decisions.tsv rows + evidence
- keep: no Autopilot fleet yet
- owner: you
- see: docs/TRUST-NEXT.md

## ready

_(empty)_

## done

### [done] Remotes + green CI
- evidence: https://github.com/Dahhrk/dark-factory (public), https://github.com/Dahhrk/Control-Glass (private); kitchen-ci success; Control-Glass ci drive smoke success

### [done] Trust stack Phase A–B (Dune hard + kitchen visibility)
- evidence: boundaries:probe, anti-slop, ci:drive, SETUP-STATUS honest, TRUST-NEXT.md

### [done] control-glass sticky drive daemon
- evidence: smoke idle→click→ready

### [done] Cloud Agents + create-verify + Grok Bot present
- source: you

### [done] Product folder Control-Glass
- evidence: ~/Projects/Control-Glass; brand Control-Glass
