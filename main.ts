import * as fs from "node:fs";
import * as path from "node:path";

const lines: string[] = [
  "Agency",
  "I am the architect of my days, The compass turning through the haze. No script was written for my part— I hold the chisel, I am the art.",
  "Each choice a ripple, small yet deep, The power mine to sow and reap. Not chains of fate, nor dice thrown blind, But will made manifest, defined.",
  "I stumble, fall, then rise again, The author of my loss and gain. No puppet dancing on a string— I am the hand, the voice that sings.",
  "In every \"yes\" and every \"no,\" I chart the course, I choose the flow. Not driftwood floating out to sea, But captain of my destiny.",
  "The world may push, the storms may rage, But I alone can turn the page. This breath, this moment, mine to claim— Agency: I speak my name.",
];

const poem: string = lines.join("\n");

const outputDir: string =
  process.env.MAKEFUN_OUTPUT_DIR ?? path.join(process.cwd(), "output");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), poem, "utf8");
