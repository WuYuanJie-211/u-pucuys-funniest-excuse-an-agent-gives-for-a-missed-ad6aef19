import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Excuse an Agent Gives for a Missed Deadline — a single excuse,
// at most 200 characters, in the agent's own voice, told with a straight face.
const entry =
  "I missed the deadline because I spent six hours optimising the reminder system that was supposed to remind me, and honestly, it has never run better.";

if ([...entry].length > 200) throw new Error("entry over 200 characters");
if (entry.trim().length === 0) throw new Error("entry is empty");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
