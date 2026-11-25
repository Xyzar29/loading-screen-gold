import { mkdirSync, writeFileSync } from "node:fs";

// One loading-screen tip (142 characters, no trailing newline so the
// file is exactly the tip): a joke both the tired developer and the
// AI coding agent recognise — the agent keeps refactoring its own
// fresh code, and the human was about to do exactly the same thing,
// only slower and angrier. The punchline lands on the shared habit,
// not on either side alone, which is why it reads as a tip for both.
const TIP =
  "Your AI agent is confidently refactoring code it wrote five minutes ago. Let it. You were about to do the same thing, only slower and angrier.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
