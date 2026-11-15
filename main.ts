import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `The Spare Room

I ask the AI to tell my brother
he cannot stay.
It gives my refusal clean corners,
a room with nothing left to trip on.

Onscreen, I cannot becomes we cannot.
I live alone.

I put the I back.
The machine waits with my sentence
ready to leave me.

Send, I had said.
I take that word back first.
Then: Three nights.

In the spare room, I lift
the boxes off the bed.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
