import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I bought one apple. The self-checkout screamed 'unexpected item in the bagging area' like I'd smuggled a grand piano. I lifted the apple. I put it down. I apologised to a machine. The attendant watched all of it and said, 'Yeah, it does that.' Then why is there a camera judging me?";

if (entry.length < 1 || entry.length > 400 || entry.trim().length === 0) {
  throw new Error("entry must be 1-400 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
