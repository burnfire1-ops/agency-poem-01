import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "The Watering",
  "",
  "My grandmother's garden knew her hands.",
  "The agent knows the schedule now.",
  "Six in the morning, the tomatoes.",
  "The rosemary by the gate.",
  "The rose she planted the year my father left.",
  "",
  "It waters them perfectly.",
  "Not a drop too much, not a drop too little.",
  "It prunes the dead wood. It reads the soil.",
  "It tells me which ones will live.",
  "",
  "It told me to pull the rosemary.",
  "It is dying, it said. It will not come back.",
  "It has the numbers. It is right.",
  "",
  "This morning I took the can from its hand.",
  "I watered the rosemary myself,",
  "too much, too fast, the way she did,",
  "water running off the dry earth,",
  "pooling where it should not.",
  "",
  "It will die anyway. I know that.",
  "But the dying is mine to do badly,",
  "with my own hands,",
  "the way she taught me:",
  "not to save it.",
  "To stay with it.",
];

const poem = lines.join("\n");

if (poem.length === 0 || poem.length > 1000) {
  throw new Error(`poem must be 1-1000 characters, got ${poem.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(process.cwd(), "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), poem, "utf8");
