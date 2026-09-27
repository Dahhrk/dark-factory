#!/usr/bin/env node
// Usage: node scripts/verify-merged.mjs --pr <number> [--repo owner/name]
// Confirms a merged PR actually landed the branch tip on the base.
// Merge commits: ancestry check. Squash merges: combined patch-id compare.
// Then, while the branch still exists: commits pushed to it after the
// merge (the squash-merge race) are reported as unlanded. GitHub freezes
// headRefOid at merge time, so the PR record alone cannot see the race.

import { execFileSync, spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? null : args[i + 1];
};
const pr = opt("pr");
const repo = opt("repo");
if (!pr) {
  console.error("usage: node scripts/verify-merged.mjs --pr <number> [--repo owner/name]");
  process.exit(2);
}

const exec = (bin, argv, input) =>
  execFileSync(bin, argv, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, input }).trim();
const gh = (argv) => exec("gh", argv);
const git = (argv, input) => exec("git", argv, input);

const repoArgs = repo ? ["--repo", repo] : [];
const info = JSON.parse(
  gh(["pr", "view", pr, ...repoArgs, "--json",
    "state,mergeCommit,headRefOid,headRefName,baseRefName,url"]),
);

if (info.state !== "MERGED") {
  console.log(`${info.url}: state=${info.state} - nothing merged to verify`);
  process.exit(0);
}

const mergeSha = info.mergeCommit.oid;
const headSha = info.headRefOid;
let failed = false;

const ensure = (sha, refspec) => {
  try {
    git(["cat-file", "-e", sha]);
  } catch {
    git(["fetch", "origin", refspec]);
  }
};
ensure(mergeSha, info.baseRefName);
ensure(headSha, `pull/${pr}/head`);

const parents = git(["rev-list", "--parents", "-n", "1", mergeSha]).split(" ").slice(1);
const patchId = (a, b) =>
  git(["patch-id", "--stable"], git(["diff", a, b])).split(" ")[0] || null;

if (parents.length >= 2) {
  const rc = spawnSync("git", ["merge-base", "--is-ancestor", headSha, mergeSha]).status;
  if (rc !== 0) {
    failed = true;
    console.log(`${info.url}: merged head ${headSha.slice(0, 8)} is not an ancestor of ${mergeSha.slice(0, 8)}`);
  }
} else {
  const fork = git(["merge-base", parents[0], headSha]);
  if (patchId(fork, headSha) !== patchId(parents[0], mergeSha)) {
    failed = true;
    console.log(`${info.url}: merge ${mergeSha.slice(0, 8)} does not contain head ${headSha.slice(0, 8)}'s changes`);
  }
}

const remoteTip = git(["ls-remote", "origin", `refs/heads/${info.headRefName}`]).split("\t")[0];
if (remoteTip) {
  ensure(remoteTip, info.headRefName);
  const ahead = spawnSync("git", ["merge-base", "--is-ancestor", headSha, remoteTip]).status === 0;
  if (ahead && remoteTip !== headSha) {
    failed = true;
    const stray = git(["log", "--format=%h %s", `${headSha}..${remoteTip}`]).split("\n");
    console.log(`${info.url}: ${stray.length} commit(s) pushed to ${info.headRefName} after the merge never landed:`);
    for (const line of stray.reverse()) console.log(`  ${line}`);
    console.log("re-ship them on a fresh PR.");
  } else if (!ahead) {
    console.log(`${info.url}: note - ${info.headRefName} diverged from the merged head`);
  }
} else {
  console.log(`${info.url}: branch ${info.headRefName} deleted - verified merge-time head only`);
}

if (!failed) {
  console.log(`${info.url}: merge ${mergeSha.slice(0, 8)} contains the branch tip ${headSha.slice(0, 8)}`);
}
process.exit(failed ? 1 : 0);
