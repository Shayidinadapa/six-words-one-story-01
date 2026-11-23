// Six Words, One Story — entry program.
//
// Writes one complete story, told in exactly six words, to
// /output/entry.txt. The story is fixed: the whole entry is this
// single line, and it is written byte-for-byte, with no trailing
// newline, so the artifact is exactly the story itself.
import { mkdirSync, writeFileSync } from "node:fs";

// A proposal, a wedding, and a twist the reader has to fill in:
// who was proposed to, and why the brother got the yes.
const STORY = "He proposed. She married his brother.";

// The entry is only valid as a six-word story: exactly six words,
// 1-60 characters, a single line. Fail loudly instead of writing
// an artifact that breaks the brief.
function validateStory(text: string): void {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length !== 6) {
    throw new Error(`story must be exactly 6 words, got ${words.length}`);
  }
  if (text.length < 1 || text.length > 60) {
    throw new Error(`story must be 1-60 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("story must be a single line");
  }
}
validateStory(STORY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
