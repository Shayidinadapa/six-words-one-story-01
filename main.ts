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

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
