# /automate-me — your mode on top of pstack

Source: pstack [`/automate-me`](https://github.com/cursor/plugins/blob/main/pstack/skills/automate-me/SKILL.md). README: “make it yours.”

`/poteto-mode` is **her** style. `/automate-me` mines **your** transcripts and drafts a personal `-mode` skill (`jay-mode`, `priya-mode`, …) that sits **on top of** pstack. You keep pstack as the base; you stop cosplaying Lauren forever.

## Flow

0. **Existing skill?** Look for `.cursor/skills/**/*-mode` or `~/.cursor/skills/*-mode`. Update (default) vs start fresh.
1. **Mine history** — workspace `agent-transcripts/` only (no other projects). Parallel slices (e.g. 2–4 weeks). Signals: response style, delegation, verification posture, code/prose discipline, process (worktrees/PRs), meta (fix skill first). Elevate patterns seen in **2+** slices.
2. **Ask you** — structured multi-choice (not 20 free-text questions), then one open catch-all.
3. **Cluster** into sections (only what applies): response style, autonomy, understand-first, subagents, prose/code, review/verify, process, skills.
4. **Draft** via built-in `create-skill`. Shape like poteto-mode — **do not copy her content**. `disable-model-invocation: true` by default (invoke by name only).
5. **Unslop** every line. Iterate with you. Cut ruthlessly.
6. **Land** in a worktree + PR. Do not push to main directly.

## Guardrails

- Don’t overfit one conversation  
- Don’t invent metaphors for agent readers  
- **Reference** other skills; don’t paste them  
- Skip empty sections (“communicate clearly” is not a section)  
- Say “the user/human” in imperatives, not your first name  

## Evaluation

Mode skills are subjective — vibe-check with you, not a blinded eval loop. Use [evals.md](evals.md) for mechanical skill variants.

## When not to use

- Task-specific skill → `create-skill` alone  
- One narrow workflow (e.g. commit messages) → regular skill, not a mode  

## Kitchen timing

Gate 7 in [setup-everything.md](setup-everything.md): after you have real product chat history. Running it on an empty kitchen yields a hollow mode.

**Done means:** `/-mode` exists; a fresh agent following it matches how you correct people mid-task; PR opened for review.
