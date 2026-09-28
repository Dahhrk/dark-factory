# Claude - {{PRODUCT}}

Private product. Kitchen is `dark-factory`. Do not invent product work there.

## Defaults

- Every non-trivial ask is a one-shot task. Vague -> poteto-prompt -> poteto-mode.
  Structured -> poteto-mode with Done means + Keep. See kitchen
  `docs/one-shot-task.md` and plug-factory `cursor-team-kit/skills/one-shot-task`.
- Default: every prose surface is orwell-prose (docs, PRs, commits, chat
  reports, landing copy; rules 1-12). Agents apply before delivery; do not
  wait to be asked. `/orwell-prose` names the contract (same shape as
  one-shot-task). `unslop` and no-em-dash stay secondary. This file or
  `AGENTS.md` may override voice. See kitchen `docs/orwell-prose.md` and
  plug-factory `cursor-team-kit/skills/orwell-prose`.
- Never commit secrets. Autopilot stays off unless Dark greened TRUST-NEXT.
