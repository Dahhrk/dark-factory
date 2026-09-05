# Dune (apply on this product)

**Dune** contract — five rules + agent assumptions.
**Not** Dune Electron source. Method only. Full write-up: dark-factory `docs/dune-method.md`.

## Agent contract (design inputs)

Agents: copy nearest pattern; edit the open file; take the path that compiles; avoid deleting unseen callers; follow the prompt even against an invariant.

## Five rules

1. Conventional path needs fewer decisions than a shortcut.
2. Forbidden dependencies fail mechanically.
3. Every durable value has one obvious writer.
4. New product work adds isolated files, not branches in shared roots.
5. Exceptions are narrow, explicit, architecture-reviewed.

## Minimum CI (done means)

- [ ] Folder / layer boundary check fails on a deliberate illegal import
- [ ] At least one footgun banned (team-specific: `any`, restricted hooks, comments-as-policy, …)
- [ ] Optional: `npx skills add dmmulroy/anti-slop --skill install-anti-slop`
- [ ] `BUGBOT.md` committed
- [ ] `/create-verification-skill` produced a real `control-*` CLI + Feature Map (four H2s)
- [ ] `npm run anti-ai-ui` wired (install copies `gates/check-anti-ai-ui.mjs` into `scripts/`) + CI step
- [ ] UI products: visual-parity baselines after first Look is approved (see Control-Glass)

Smell twice → red build (encode). Smell three times without encode = process failure.

## Self-improve

Weekly encode-lessons (kitchen `automations/cursor/encode-lessons-weekly.md`). Cadence: kitchen `docs/SELF-IMPROVE.md`.
