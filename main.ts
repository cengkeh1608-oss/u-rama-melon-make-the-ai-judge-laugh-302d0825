// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// One line about office life, under 200 characters, to /output/entry.txt.
// Winner D14 (25/25 from 26 drafts): a three-step escalation that shrinks
// the medium of communication — meeting, email, look, silence — and lands
// its twist on the final word.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The meeting could have been an email. The email could have been a look. The look could have been silence.";

const outDir = process.argv[2] ?? "/output";
const botDir = process.argv[3] ?? "/bot";
void botDir;

// Gate: RULES.txt requires 1–200 UTF-8 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-200 or not one line`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
