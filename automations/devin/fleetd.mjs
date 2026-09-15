#!/usr/bin/env node
// fleetd - the Devin-lane routine scheduler. Run on a timer (15 min task).
// kind: script  -> executes locally, no LLM, free
// kind: session -> spawns a Devin session via acp-run.mjs (their models, real
//                  agent). If the spawn fails (no binary, expired credential)
//                  the job falls back to fleet/inbox/<bot>.jsonl for a manual
//                  session to drain. FLEET_SESSIONS=off forces queue-only.
import { execSync } from 'node:child_process';
import { runPrompt } from './acp-run.mjs';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const fleetDir = join(root, 'automations', 'devin', 'fleet');
const profilesDir = join(fleetDir, 'profiles');
const inboxDir = join(fleetDir, 'inbox');
const logFile = join(fleetDir, 'log.tsv');
const stateFile = join(homedir(), 'Projects', 'dark-factory', 'local', 'fleet-state.json');

// Tiny YAML-subset parser for the fixed profile shape:
// name:/role:/brief: scalars, then routines: list of {name,schedule,kind,file|command}
function parseProfile(text) {
  const profile = { routines: [] };
  let cur = null;
  for (const raw of text.split('\n')) {
    const line = raw.replace(/\r$/, '');
    let m;
    if ((m = line.match(/^(name|role|brief|model):\s*(.+)$/))) profile[m[1]] = m[2].trim();
    else if ((m = line.match(/^\s+-\s+name:\s*(.+)$/))) {
      cur = {};
      profile.routines.push(cur);
      cur.name = m[1].trim();
    } else if (cur && (m = line.match(/^\s+(schedule|kind|file|command|timeout|model):\s*(.+)$/))) {
      cur[m[1]] = m[2].trim();
    }
  }
  return profile;
}

// schedule: "daily HH:MM" | "weekly <Day> HH:MM"
function dueKey(schedule, now) {
  const m = schedule.match(/^(daily|weekly)\s+(?:(\w+)\s+)?(\d{2}):(\d{2})$/);
  if (!m) return null;
  const [, freq, day, hh, mm] = m;
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const dueMin = +hh * 60 + +mm;
  if (nowMin < dueMin) return null;
  if (freq === 'daily') return `d:${today}`;
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  if (days[now.getDay()] !== day) return null;
  return `w:${today}`;
}

const state = existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf8')) : {};
const now = new Date();
const ts = now.toISOString();
const saveState = () => {
  if (!existsSync(dirname(stateFile))) mkdirSync(dirname(stateFile), { recursive: true });
  writeFileSync(stateFile, JSON.stringify(state, null, 2));
};
const sessionsOn = process.env.FLEET_SESSIONS !== 'off';
let ran = 0;

for (const file of readdirSync(profilesDir).filter((f) => f.endsWith('.yaml'))) {
  const profile = parseProfile(readFileSync(join(profilesDir, file), 'utf8'));
  const bot = profile.name || file.replace(/\.yaml$/, '');
  const slug = bot.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  for (const r of profile.routines || []) {
    const key = `${slug}.${r.name}`;
    const due = r.schedule ? dueKey(r.schedule, now) : null;
    if (!due || state[key] === due) continue;
    state[key] = due;
    saveState();
    ran++;

    if (r.kind === 'script' && r.command) {
      let result = 'ok';
      try {
        execSync(r.command, { cwd: root, stdio: 'pipe' });
      } catch (e) {
        result = `fail: ${String(e.message).split('\n')[0]}`;
      }
      appendFileSync(logFile, `${ts}\t${bot}\t${r.name}\tscript\t${result}\n`);
    } else if (r.kind === 'session' && r.file) {
      const prompt = [
        `You are ${bot}${profile.role ? `, ${profile.role}` : ''}.${profile.brief ? ` ${profile.brief}` : ''}`,
        `Read and execute the playbook at automations/devin/${r.file} in this repository (the dark-factory kitchen).`,
        'Do the work the playbook describes, write outputs where it says, then reply with one line: DONE <what you did> or BLOCKED <reason>.',
      ].join('\n');
      let result = 'ok';
      let sid = '';
      try {
        if (!sessionsOn) throw new Error('FLEET_SESSIONS=off');
        const timeoutMs = r.timeout ? Number(r.timeout) * 60000 : undefined;
        const out = await runPrompt({
          prompt,
          cwd: root,
          model: r.model || profile.model,
          timeoutMs,
          onSession: (s) => {
            sid = s;
            appendFileSync(logFile, `${ts}\t${bot}\t${r.name}\tsession\tspawned ${s}\n`);
          },
        });
        if (out.text) appendFileSync(join(inboxDir, `${slug}.out.jsonl`), JSON.stringify({ ts, routine: r.name, sessionId: out.sessionId, reply: out.text }) + '\n');
      } catch (e) {
        const job = JSON.stringify({ ts, bot, routine: r.name, file: `automations/devin/${r.file}`, ...(sid ? { sessionId: sid } : {}) });
        appendFileSync(join(inboxDir, `${slug}.jsonl`), job + '\n');
        result = `queued: ${String(e.message).split('\n')[0].slice(0, 80)}`;
      }
      appendFileSync(logFile, `${ts}\t${bot}\t${r.name}\tsession\t${result}\n`);
    }
  }
}

// Event listeners (poll flavor): watch fleet repos for new issues/PRs and
// queue a context-farm job per signal. Dedupes on event id in state.
// Grok has push listeners; on this plan the 15-min task polls instead.
const registry = join(homedir(), 'Projects', 'registry.md');
let heard = 0;
if (existsSync(registry)) {
  const slugs = [...new Set(
    readFileSync(registry, 'utf8')
      .split('\n')
      .map((l) => l.match(/\*\*github:\*\*\s*`([^`]+)`/)?.[1])
      .filter(Boolean),
  )];
  for (const slug of slugs) {
    let events;
    try {
      events = JSON.parse(execSync(`gh api "repos/${slug}/events?per_page=20"`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }));
    } catch { continue; }
    for (const ev of events) {
      if (!['IssuesEvent', 'PullRequestEvent'].includes(ev.type)) continue;
      const action = ev.payload?.action;
      if (action !== 'opened' && action !== 'reopened') continue;
      const id = `gh:${ev.id}`;
      if (state[id]) continue;
      const job = JSON.stringify({
        ts, bot: 'Harvey Specter', routine: 'event',
        file: 'automations/devin/routines/context-farm.md',
        signal: { repo: slug, type: ev.type, id: ev.id },
      });
      appendFileSync(join(inboxDir, 'harvey-specter.jsonl'), job + '\n');
      state[id] = 1;
      heard++;
    }
  }
}
if (heard) appendFileSync(logFile, `${ts}\tHarvey Specter\tevent-listen\tpoll\t${heard} signal(s) queued\n`);

saveState();
console.log(ran || heard ? `fleetd: ${ran} routine(s) fired, ${heard} signal(s) heard` : 'fleetd: nothing due');
