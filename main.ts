// ai-joke-03 entry (Node 22, standard library only): writes one fixed one-liner
// about AI coding agents to /output/entry.txt. The joke is written with no
// trailing newline: the judge reads exactly the bytes in the file, so write
// no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke itself: one fixed line, written with no trailing newline.
const JOKE = 'My coding agent is just a rubber duck that charges by the token.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
