# Intake queue

## inbox

### [inbox] Confirm spend cap
- done means: Cursor billing shows an on-demand spend cap
- owner: you

### [inbox] Paste Grok Bot daily maintain (optional)
- source: automations/grok-bot/PASTE-NOW.md
- done means: routine exists in Grok Bot and one dry-run completed
- owner: you

### [inbox] First overnight (limited)
- playbook: autonomous run
- goal: one overnight predicate on Control-Glass after remotes + CI green
- done means: audit/decisions.tsv rows + evidence
- keep: no Autopilot fleet yet
- owner: none

## ready

### [ready] Publish remotes
- goal: public dark-factory + private Control-Glass on GitHub
- done means: two remotes exist; Bugbot on Control-Glass; Actions green
- owner: agent (trust stack closeout Phase C)

## done

### [done] control-glass sticky drive daemon
- source: agent (post Cloud Agents)
- evidence: smoke idle→click→ready; screenshot+snapshot under tmp/verify-glass

### [done] Cloud Agents + create-verify + Grok Bot present
- source: you
- evidence: user report + verify-glass skill on disk + doctor OK

### [done] Kitchen research + naming + storage model
- evidence: docs/her-system-map.md, docs/naming.md

### [done] Save Cursor daily maintain automation
- source: you
- evidence: user confirmed saved; workspace should be ~/Projects/Control-Glass

### [done] Product folder Control-Glass
- evidence: ~/Projects/Control-Glass; eyes verify-glass / control-glass; brand Control-Glass
