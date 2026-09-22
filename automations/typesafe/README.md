# typesafe — Jev judge calls

Cheap calibrated judgments inside the loop. TypeSafe's Jev is a System One
model: `state` + typed questions in, structured answers + probabilities +
confidence out in ~100ms at ~$0.0002/call.

Auth: `TYPESAFE_API_KEY` in env (never in repo files). Key comes from
console.typesafe.ai/keys.

```sh
node automations/typesafe/jev.mjs --state <file|-> --preset pr-risk
node automations/typesafe/jev.mjs --state <file|-> --preset smell
node automations/typesafe/jev.mjs --state <file|-> --questions questions.json
```

Presets:

- `pr-risk` — risk score (trivial/routine/risky/dangerous), `needs_human`
  noul, size choice. Built for merge-queue triage: score a PR diff before
  spending an agent review on it.
- `smell` — `real_repeat` noul + `control` choice (gate/script/skill/doc).
  Built for close-loop: pre-filter ledger entries before encode-lessons.

Raw questions file shape:

```json
{
  "my_question": {
    "type": "noul|choice|score",
    "instructions": "one atomic judgment",
    "criteria": { "opt": "description" }
  }
}
```

Choice/score answers carry `probabilities` + `confidence` — branch on
confidence in code, escalate low-confidence to a human or a full agent.
Docs: docs.typesafe.ai.
