// One-line museum placard: the communal office microwave, presented as
// an excavated artifact with catalogue date, material and donor.
// The program's only job is to place the placard text in entry.txt,
// honouring the bounty gate of 1 to 180 characters with no trailing
// newline, so the file holds exactly the line and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const placard =
  "Communal microwave, c. 1998. Enamelled steel, permanently fish-scented. Gift of the Accounts Department, who never cleaned it and still queue for it daily.";

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"];
for (const dir of destinations) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, placard);
  } catch {
    // A destination we cannot write to is skipped; the other still gets it.
  }
}
