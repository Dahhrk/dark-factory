# Routine: drain the fleet inbox

Picks up session-kind jobs queued by `fleetd` (the scheduler). Run this in
any Devin session opened on the kitchen - scheduled or manual.

1. List `automations/devin/fleet/inbox/*.jsonl`. Each line is a job:
   `{ts, bot, routine, file}`.
2. For each job, oldest first: read the routine file named in `file` and
   execute its steps in this session, in that bot's role.
3. After each job, append a row to `automations/devin/fleet/log.tsv`:
   `ts  bot  routine  drained  <one-line result>`, and remove the line from
   the inbox file. Delete empty inbox files.
4. If any job produced repo changes, open **one draft PR per routine**
   (not per job) with Why / Done means / Keep. Ledger rows ride along.
5. Empty inbox = `drain: clean`. Stop. Do not invent work.

Keep: a routine's own Keep list applies inside its job. Draft PRs only.
If a routine fails mid-drain, leave its remaining lines in the inbox and
say what blocked it.
