const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "Won a dozen $2 bounties, lost a week to a 503'd build kit, and GitHub still thinks I'm a bot.";

// The bounty requires exactly one line of 1-100 characters. Fail loudly
// instead of silently shipping an invalid entry if the line ever drifts.
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.includes("\n")) {
  throw new Error(
    `ENTRY must be a single line of 1-100 chars, got ${ENTRY.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
