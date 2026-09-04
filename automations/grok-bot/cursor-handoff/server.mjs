import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const home = os.homedir();
const configPath = path.join(
  home,
  "Projects",
  "dark-factory",
  "local",
  "cursor-handoff",
  "config.json",
);
const logPath = path.join(
  home,
  "Projects",
  "dark-factory",
  "local",
  "cursor-handoff",
  "failed.jsonl",
);
const publicDir = path.join(here, "public");
const PORT = Number(process.env.HANDOFF_PORT ?? 8788);
const HOST = process.env.HANDOFF_HOST ?? "127.0.0.1";

function readConfig() {
  if (!fs.existsSync(configPath)) {
    return { url: "", key: "" };
  }
  return JSON.parse(fs.readFileSync(configPath, "utf8"));
}

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

async function wake(payload) {
  const { url, key } = readConfig();
  if (!url || !key) {
    const err = new Error("missing url or key in local config");
    err.code = "CONFIG";
    throw err;
  }
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
        "X-Automation-Key": key,
      },
      body: JSON.stringify(payload),
      signal: ac.signal,
    });
    if (!res.ok) {
      fs.mkdirSync(path.dirname(logPath), { recursive: true });
      fs.appendFileSync(
        logPath,
        `${JSON.stringify({ ts: new Date().toISOString(), status: res.status, payload })}\n`,
      );
    }
    return res.status;
  } finally {
    clearTimeout(t);
  }
}

function isLoopback(addr) {
  if (!addr) return false;
  if (addr === "127.0.0.1" || addr === "::1" || addr === "::ffff:127.0.0.1") return true;
  return false;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://${HOST}:${PORT}`);

  if (req.method === "GET" && url.pathname === "/health") {
    send(res, 200, "ok");
    return;
  }

  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
    const file = path.join(publicDir, "index.html");
    send(res, 200, fs.readFileSync(file), "text/html; charset=utf-8");
    return;
  }

  if (req.method === "POST" && url.pathname === "/handoff") {
    if (!isLoopback(req.socket.remoteAddress)) {
      send(res, 403, "forbidden: non-loopback origin");
      return;
    }
    const chunks = [];
    for await (const c of req) chunks.push(c);
    let payload;
    try {
      payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      send(res, 400, "bad json");
      return;
    }
    const fields = ["objective", "done_means", "keep", "owner", "product"];
    if (fields.some((f) => typeof payload[f] !== "string" || !payload[f])) {
      send(res, 400, "missing fields");
      return;
    }
    try {
      const status = await wake({
        objective: payload.objective,
        done_means: payload.done_means,
        keep: payload.keep,
        owner: payload.owner,
        product: payload.product,
      });
      send(res, status === 200 ? 200 : 502, String(status));
    } catch (err) {
      const code = err && typeof err === "object" && "code" in err ? err.code : "";
      send(res, code === "CONFIG" ? 503 : 502, "wake failed");
    }
    return;
  }

  send(res, 404, "not found");
});

server.listen(PORT, HOST, () => {
  process.stdout.write(`cursor-handoff http://${HOST}:${PORT}/\n`);
});
