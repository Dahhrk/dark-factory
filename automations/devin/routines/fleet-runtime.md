# Routine: fleet runtime (the "computer")

The pinned-session playbook. Run this once in a long-lived Devin cloud
session on `Dahhrk/dark-factory` and leave the session open - its box is
the Agent Computer equivalent for this lane.

1. Clone the kitchen in the box and install a 15-minute loop:

   ```bash
   git clone https://github.com/Dahhrk/dark-factory ~/dark-factory
   cd ~/dark-factory
   nohup bash -c 'while true; do node automations/devin/fleetd.mjs; sleep 900; done' > ~/fleetd.log 2>&1 &
   ```

   (If the box has cron, prefer `*/15 * * * *` over the sleep loop.)

2. Configure `gh` auth in the box if prompts fail - script routines and the
   event poll need it.

3. Verify: `node automations/devin/fleetd.mjs` prints fired/due state, and
   `fleet/log.tsv` gets a row on the next tick.

4. Each time this session gets a turn (you message it, or a scheduled drain
   wakes), also run `routines/drain-inbox.md` so queued session jobs execute.

## What this gives you

- Deterministic routines (needs-you, harvest, event poll) run on Devin's
  infra every 15 min - independent of any laptop being awake.
- Session-kind jobs still queue into `fleet/inbox/` - a box process cannot
  start agent turns, so judgment work waits for a drain.
- If the session is archived the box dies; rerun this playbook in a fresh
  session to stand the computer back up. Nothing is lost - all state is in
  the repo or the box's home dir.

Keep: the box never merges, never force-pushes, never spends. It queues and
reports; sessions and humans do the rest.
