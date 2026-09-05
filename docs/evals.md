# Evals (unit tests for skills)

Source: pstack playbook [`eval`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/eval.md); spoken in the [workshop](workshop-grok-bot.md). Colin asked how Feature Maps stay honest — **evals**.

Evals test how a **skill or prompt change** affects agent behavior **before** you promote it. Failure mode: **observer effect** — agents that know they are being scored change behavior (like a salesperson when the manager sits in).

## Non-negotiables for blinding

Candidates must not see:

- Words like `eval`, `test`, `judge`, `experiment`, `rubric`, `score`, `compare`, `benchmark`, `candidate`, `arena` in dirs, files, or prompts they read
- Meta goals (“show me you followed the principles”) — give an organic user request instead
- Chain-eliciting cues (“list which skills you applied”) — grade from **code shape + files opened**, not self-report
- Labels like `candidate-1` — use project-shaped names
- That other candidates exist

Judge may know it is judging. Sees outputs by **sanitized label only**, never model name. Comparing two variants: **one** judge scores both sets in a **single** pass on one scale (two separate judge runs drift).

## Steps

1. **Frame.** What variant is under test; what success looks like. Rubric (3–6 criteria) for the **judge only**.
2. **Sanitized environments.** Per-candidate working dir with the variant planted; organic project skeleton + skills they would naturally read.
3. **One organic prompt.** What a user would type.
4. **Spawn N parallel candidates** (arena Phase B) — different models, same prompt, own dirs.
5. **One blinded judge** on a **different model family** (arena Phase C).
6. **Verify the chain from transcripts**, not self-report. Workspace `agent-transcripts/` only — do not glob other projects. Citing a principle ≠ reading its skill ≠ applying it.
7. **You read every output** end to end. Disagreement with the judge = biased model or ambiguous rubric. Synthesize.

**Reply:** variant, rubric, per-candidate notes, judge verdict, your synthesis, promote or not.

## Loop

Workshop: if it is not a **10**, `/loop` and keep going. Skill maintenance needs taste + a backseat driver (“why that way?”).

## When to run

- After editing a skill or `/automate-me` draft
- Before trusting a verify-skill change at Autopilot scale
- When Feature Map maintain keeps “fixing” docs instead of catching product bugs

## Related

- [feature-maps.md](feature-maps.md) — evals keep maps honest  
- [automate-me.md](automate-me.md) — mode skills are vibe-checked with you; evals for mechanical skills  
- [workshop-grok-bot.md](workshop-grok-bot.md)  
- [adjacent-growth.md](adjacent-growth.md) — expert-panel / copy hillclimb (marketing layer; not a substitute for this playbook)
