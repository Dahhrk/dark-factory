import { readFileSync } from "node:fs";

const raw = readFileSync(0, "utf8");
let prompt = "";
try {
  const input = JSON.parse(raw || "{}");
  prompt = String(input.prompt ?? input.content ?? JSON.stringify(input));
} catch {
  prompt = raw;
}

const patterns = [
  /xox[baprs]-[0-9A-Za-z-]{10,}/i,
  /sk-[a-z0-9]{20,}/i,
  /ghp_[A-Za-z0-9]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/,
  /Automation-Key:\s*\S+/i,
  /Bearer\s+[A-Za-z0-9\-._~+/]+=*/i,
];

for (const re of patterns) {
  if (re.test(prompt)) {
    process.stdout.write(
      JSON.stringify({
        continue: false,
        user_message:
          "Prompt looks like it contains a secret. Remove keys/tokens before sending.",
        agent_message:
          "Blocked by secrets-scan hook — do not paste webhook keys, tokens, or private keys into chat.",
      }),
    );
    process.exit(0);
  }
}

process.stdout.write(JSON.stringify({ continue: true }));
