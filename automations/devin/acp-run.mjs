#!/usr/bin/env node
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import readline from "node:readline";

const DEVIN = join(
  homedir(),
  "AppData",
  "Local",
  "Programs",
  "Devin",
  "resources",
  "app",
  "extensions",
  "windsurf",
  "devin",
  "bin",
  "devin.exe",
);
const CREDS = join(homedir(), "AppData", "Roaming", "devin", "credentials.toml");

function apiKey() {
  const m = readFileSync(CREDS, "utf8").match(/windsurf_api_key\s*=\s*"([^"]+)"/);
  if (!m) throw new Error("no windsurf_api_key in credentials.toml");
  return m[1];
}

const BIN = process.env.DEVIN_ACP_BIN || DEVIN;

export function runPrompt({ prompt, cwd, model, resume, timeoutMs = 20 * 60 * 1000, onSession }) {
  return new Promise((resolvePromise, reject) => {
    const proc = spawn(BIN, ["acp"], { stdio: ["pipe", "pipe", "ignore"] });
    const timer = setTimeout(() => {
      proc.kill();
      reject(new Error(`acp-run: timed out after ${Math.round(timeoutMs / 60000)}m`));
    }, timeoutMs);
    proc.on("error", (e) => {
      clearTimeout(timer);
      reject(e);
    });
    const rl = readline.createInterface({ input: proc.stdout });
    let id = 0;
    const pending = new Map();
    const send = (method, params) =>
      new Promise((res, rej) => {
        const rid = ++id;
        pending.set(rid, { res, rej });
        proc.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: rid, method, params }) + "\n");
      });
    let out = "";
    rl.on("line", (line) => {
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        return;
      }
      if (msg.method === "session/update") {
        const u = msg.params?.update;
        if (u?.sessionUpdate === "agent_message_chunk" && u.content?.type === "text") {
          out += u.content.text;
        }
        return;
      }
      if (msg.id !== undefined && pending.has(msg.id)) {
        const p = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? p.rej(new Error(msg.error.message)) : p.res(msg.result);
      }
    });
    (async () => {
      await send("initialize", {
        protocolVersion: 1,
        clientCapabilities: { fs: { readTextFile: true, writeTextFile: true } },
      });
      await send("authenticate", {
        methodId: "devin-browser",
        _meta: { api_key: apiKey() },
      });
      const sess = resume
        ? await send("session/load", { sessionId: resume, cwd, mcpServers: [] })
        : await send("session/new", {
            cwd,
            mcpServers: [],
            ...(model ? { _meta: { model } } : {}),
          });
      const sid = resume || sess.sessionId;
      if (onSession) onSession(sid);
      if (model && !resume) {
        try {
          await send("session/set_config_option", {
            sessionId: sid,
            configId: "model",
            value: model,
          });
        } catch {
          /* model pin best-effort */
        }
      }
      const done = await send("session/prompt", {
        sessionId: sid,
        prompt: [{ type: "text", text: prompt }],
      });
      clearTimeout(timer);
      proc.kill();
      resolvePromise({ text: out, stopReason: done?.stopReason, sessionId: sid });
    })().catch((e) => {
      clearTimeout(timer);
      proc.kill();
      reject(e);
    });
  });
}

export function listSessions() {
  return new Promise((resolvePromise, reject) => {
    const proc = spawn(BIN, ["acp"], { stdio: ["pipe", "pipe", "ignore"] });
    const rl = readline.createInterface({ input: proc.stdout });
    let id = 0;
    const pending = new Map();
    const send = (method, params) =>
      new Promise((res, rej) => {
        const rid = ++id;
        pending.set(rid, { res, rej });
        proc.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: rid, method, params }) + "\n");
      });
    proc.on("error", (e) => {
      clearTimeout(timer);
      reject(e);
    });
    rl.on("line", (line) => {
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        return;
      }
      if (msg.id !== undefined && pending.has(msg.id)) {
        const p = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? p.rej(new Error(msg.error.message)) : p.res(msg.result);
      }
    });
    const timer = setTimeout(() => {
      proc.kill();
      reject(new Error("acp-run: session/list timed out"));
    }, 30000);
    (async () => {
      await send("initialize", {
        protocolVersion: 1,
        clientCapabilities: { fs: { readTextFile: true, writeTextFile: true } },
      });
      await send("authenticate", { methodId: "devin-browser", _meta: { api_key: apiKey() } });
      const list = await send("session/list", {});
      clearTimeout(timer);
      proc.kill();
      resolvePromise(list?.sessions || []);
    })().catch((e) => {
      clearTimeout(timer);
      proc.kill();
      reject(e);
    });
  });
}

export function checkAuth() {
  return new Promise((resolvePromise) => {
    const proc = spawn(BIN, ["acp"], { stdio: ["pipe", "pipe", "ignore"] });
    proc.on("error", () => resolvePromise(false));
    const rl = readline.createInterface({ input: proc.stdout });
    let id = 0;
    const send = (method, params) =>
      new Promise((res) => {
        const rid = ++id;
        const onMsg = (msg) => {
          if (msg.id === rid) {
            rl.off("line", onLine);
            res(msg);
          }
        };
        const onLine = (line) => {
          try {
            onMsg(JSON.parse(line));
          } catch {}
        };
        rl.on("line", onLine);
        proc.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: rid, method, params }) + "\n");
      });
    (async () => {
      await send("initialize", {
        protocolVersion: 1,
        clientCapabilities: { fs: { readTextFile: true, writeTextFile: true } },
      });
      const auth = await send("authenticate", {
        methodId: "devin-browser",
        _meta: { api_key: apiKey() },
      });
      proc.kill();
      resolvePromise(!auth.error);
    })().catch(() => {
      proc.kill();
      resolvePromise(false);
    });
    setTimeout(() => {
      proc.kill();
      resolvePromise(false);
    }, 30000);
  });
}

if (process.argv[1] && process.argv[1].endsWith("acp-run.mjs")) {
  const flag = (name) => {
    const i = process.argv.indexOf(name);
    return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : undefined;
  };
  if (process.argv.includes("--check")) {
    checkAuth().then((ok) => {
      process.stdout.write(ok ? "acp-run: credentials ok\n" : "acp-run: credentials expired - run `devin auth login`\n");
      process.exit(ok ? 0 : 1);
    });
  } else if (process.argv.includes("--list")) {
    listSessions()
      .then((sessions) => {
        for (const s of sessions) {
          process.stdout.write(`${s.sessionId}\t${(s.title || "").slice(0, 60)}\n`);
        }
        process.exit(0);
      })
      .catch((e) => {
        process.stderr.write(`acp-run: ${e.message}\n`);
        process.exit(1);
      });
  } else {
    const prompt = flag("--prompt") || process.argv[2];
    runPrompt({
      prompt,
      cwd: flag("--cwd") || process.argv[3] || process.cwd(),
      model: flag("--model") || process.argv[4] || undefined,
      resume: flag("--resume") || undefined,
      timeoutMs: flag("--timeout") ? Number(flag("--timeout")) : undefined,
    })
      .then((r) => process.stdout.write(JSON.stringify(r) + "\n"))
      .catch((e) => {
        process.stderr.write(`acp-run: ${e.message}\n`);
        process.exit(1);
      });
  }
}
