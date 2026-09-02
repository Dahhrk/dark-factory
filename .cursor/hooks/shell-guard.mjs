import { readFileSync } from "node:fs";

const raw = readFileSync(0, "utf8");
let command = "";
try {
  const input = JSON.parse(raw || "{}");
  command = String(input.command ?? "");
} catch {
  command = raw;
}

const deny = [
  /\bgit\s+push\s+.*--force\b/i,
  /\bgit\s+push\s+.*-f\b/i,
  /\bgit\s+reset\s+--hard\b/i,
  /\brm\s+-rf\s+[\/\\]?\s*$/i,
  /\bRemove-Item\s+-Recurse\s+-Force\s+[A-Z]:\\\s*$/i,
  /\bcurl\b.*\|\s*(i?wr|bash|sh)\b/i,
];

for (const re of deny) {
  if (re.test(command)) {
    process.stdout.write(
      JSON.stringify({
        permission: "deny",
        user_message: "Shell command blocked by kitchen shell-guard.",
        agent_message: `Denied dangerous pattern: ${command.slice(0, 120)}`,
      }),
    );
    process.exit(0);
  }
}

const ask = [/\bcurl\b/i, /\bwget\b/i, /\binvoke-webrequest\b/i];
for (const re of ask) {
  if (re.test(command)) {
    process.stdout.write(
      JSON.stringify({
        permission: "ask",
        user_message: "Network shell command — review before allowing.",
        agent_message: "shell-guard: network-ish command needs approval.",
      }),
    );
    process.exit(0);
  }
}

process.stdout.write(JSON.stringify({ permission: "allow" }));
