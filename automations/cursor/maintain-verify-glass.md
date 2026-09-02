# Daily maintain — glass verification skill

**Trigger:** Schedule daily (pick a quiet hour).

**Workspace:** `~/Projects/Control-Glass`

**Prompt to paste:**

```text
/maintain-verification-skill
Done means every feature under .cursor/skills/verify-glass/features has a clean, changed, or blocked outcome; at most one correction PR; product bugs reported not papered over in the map.
Keep: do not Autopilot; do not merge; use control-glass for live passes; Cloud Agent preferred for the heavy pass.
```

**Notes:** Cloud Agent preferred. Fail closed if control-glass doctor fails. Encode repeated map drift into CI.
