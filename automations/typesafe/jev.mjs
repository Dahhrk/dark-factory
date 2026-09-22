#!/usr/bin/env node
import { readFileSync } from "node:fs";

const KEY = process.env.TYPESAFE_API_KEY;
const API = "https://api.typesafe.ai/v1/systemone";

const PRESETS = {
  "pr-risk": {
    risk: {
      type: "score",
      instructions: "Risk that this diff breaks production or review-relevant invariants",
      criteria: [
        "trivial: docs, comments, formatting only",
        "routine: mechanical change, easily reviewed, low blast radius",
        "risky: logic change, auth/data/concurrency touched, or hard to revert",
        "dangerous: secrets, migrations, force pushes, auth bypasses, destructive ops",
      ],
    },
    needs_human: {
      type: "noul",
      instructions: "A careful human should review this diff before it merges",
    },
    size: {
      type: "choice",
      instructions: "How large is the effective change",
      criteria: {
        small: "one logical change, minutes to review",
        medium: "a few logical changes or many files, under an hour",
        large: "multiple concerns mixed, or takes a session to review",
      },
    },
  },
  smell: {
    real_repeat: {
      type: "noul",
      instructions: "This describes a genuinely recurring failure worth a structural control, not a one-off",
    },
    control: {
      type: "choice",
      instructions: "Best structural control for this lesson",
      criteria: {
        gate: "CI check or pre-commit hook that fails",
        script: "a runnable script/command",
        skill: "an agent skill or rule addition",
        doc: "documentation only, no enforcement",
      },
    },
  },
};

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? null : args[i + 1];
};

const statePath = flag("--state");
const presetName = flag("--preset");
const questionsPath = flag("--questions");
const model = flag("--model") ?? "jev-latest";

if (!KEY || !statePath || (!presetName && !questionsPath)) {
  console.error("usage: jev.mjs --state <file|-> (--preset <name>|--questions <file>) [--model jev-latest]");
  console.error("presets:", Object.keys(PRESETS).join(", "));
  process.exit(2);
}

const state = statePath === "-" ? readFileSync(0, "utf8") : readFileSync(statePath, "utf8");
const questions = questionsPath
  ? JSON.parse(readFileSync(questionsPath, "utf8"))
  : PRESETS[presetName];

if (!questions) {
  console.error(`unknown preset: ${presetName}`);
  process.exit(2);
}

const res = await fetch(API, {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({ state: state.slice(0, 120_000), model, questions }),
});

if (!res.ok) {
  console.error(`jev: HTTP ${res.status} ${await res.text()}`);
  process.exit(1);
}

const data = await res.json();
console.log(JSON.stringify({ model: data.model, answers: data.answers, usage: data.usage }, null, 2));
