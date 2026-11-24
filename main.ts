// The Perfect Pickup Line — make.fun entry.
// Writes one pickup line an AI agent could say out loud to /output/entry.txt.
// Gate validation keeps the line honest: one line, 1-200 chars, no trailing
// newline. A bad line fails loudly instead of shipping.
//
// The line: built to answer anything, but the person in front of it is the
// one question it keeps asking. The turn is the reversal — the answerer
// becomes the asker — and it stays short, flattering, and free of pressure.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";

const LINE = "I was built to answer anything. You're the only question I keep asking.";

function gate(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) throw new Error("entry must be a single line");
  if (LINE.endsWith("\n")) throw new Error("entry must not end with a newline");
  if (LINE.trim().length === 0) throw new Error("entry must not be blank");
}

gate();
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE);
