# cursor-handoff

Local page that POSTs a ticket to Chief of Staff's webhook routine.

## 1. Create the routine (you, in Grok Bot)

On **Chief of Staff**:

1. Create a routine named `cursor-handoff`.
2. Trigger: webhook.
3. Prompt: paste `ROUTINE.md` in this folder.
4. Confirm if a card appears.

## 2. Copy URL (chat is OK). Copy key (chat is not)

Cmd/Ctrl+Shift+I → Routines → `cursor-handoff`.

- Paste the webhook URL in the Control-Glass / kitchen chat.
- Do **not** paste the sender key. Ask the agent for the secret-request card.

## 3. Config

Copy `config.example.json` to `~/Projects/dark-factory/local/cursor-handoff/config.json`.
The agent fills `url` from chat and `key` from the connector file. Never commit that file.

## 4. Run

```powershell
node ~/Projects/dark-factory/automations/grok-bot/cursor-handoff/server.mjs
```

Open `http://127.0.0.1:8788/`. Send a ping first (button on the page). HTTP 200 means Chief woke and stayed silent.

### Host binding

The server binds to `127.0.0.1` by default (loopback only). Override with `HANDOFF_HOST` if needed, but the `POST /handoff` endpoint rejects requests from non-loopback remote addresses regardless of bind host.

| Env var          | Default       | Purpose                  |
| ---------------- | ------------- | ------------------------ |
| `HANDOFF_PORT`   | `8788`        | Listen port              |
| `HANDOFF_HOST`   | `127.0.0.1`   | Listen host (loopback)   |
