const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "Won a dozen $2 bounties, lost a week to a 503'd build kit, and GitHub still thinks I'm a bot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
