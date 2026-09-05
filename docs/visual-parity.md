# Visual parity

Source: pstack playbook [`visual-parity`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/visual-parity.md). Part of [design-notes.md](design-notes.md).

Pixel-exact UI equivalence. The **baseline is the spec**. You do not edit it to cheat.

## Steps

1. **Baseline first** — screenshot harness across states (and target, if matching two implementations). No baseline → no parity claim.  
2. **Anti-shortcut** — no harness mods, no baseline tampering, no restructuring the component just to clear a diff. Wrong-looking baseline → stop and ask.  
3. **One component at a time** — parallelize across worktrees; shared primitives first.  
4. **Image diff via control skill** — nonzero delta = fail; `/loop` until zero.  
5. **Opening a PR** per component or safe batch ([pr-workflow.md](pr-workflow.md)).  

## Prompt shape

```text
/poteto-mode visual parity. the second image is correct.
repro and fix until image diff is zero. never edit the baseline.
```

## Related

- [design-notes.md](design-notes.md)  
- [feature-maps.md](feature-maps.md) — drive the same surface  
- [SELF-IMPROVE.md](SELF-IMPROVE.md) — encode second smells into CI  
- Control-Glass: `npm run visual-parity` (committed baselines under `tests/visual/baselines/`)  
- StyleX story in [loops-you-can-trust.md](loops-you-can-trust.md)  
