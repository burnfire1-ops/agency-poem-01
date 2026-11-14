// The Mobile — a poem about agency.
// Writes the poem to entry.txt inside the output directory.
// Deterministic: no input, no randomness, no network, same bytes every run.
// The poem is 993 characters (gate limit 1,000), UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem, one string per line. Blank strings are the stanza breaks.
// Joined with "\n" and written with no trailing newline.
const lines = [
  "The Mobile",
  "",
  "At three months old, someone ties a ribbon",
  "from your ankle to the paper birds above your crib.",
  "You kick by accident. The birds lurch.",
  "You kick again, and this time it is not an accident.",
  "Something new is born: I, small as a seed,",
  "the hinge between wanting and the answer,",
  "who found the universe has a handle",
  "and the handle is shaped like you.",
  "",
  "Later the ribbons get harder to see.",
  "The lease. The diagnosis. The accent you were handed.",
  "Your mother's silences, worn like her jaw.",
  "Some are tied to everything, and you kick,",
  "and a stranger across the world feels the tremor",
  "and never learns your name.",
  "",
  "Agency is not freedom. Freedom is a story about the sky.",
  "Agency is smaller and more stubborn:",
  "the cold floor, the decision to stand on it,",
  "the sentence you finally say out loud,",
  "the no that costs you the room,",
  "the yes that builds you another.",
  "",
  "It is knowing the ribbon is short",
  "and that someone else tied the knot,",
  "and kicking anyway,",
  "and watching the birds turn,",
  "and kicking again.",
];

const poem = lines.join("\n");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
