import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

test('two executions emit identical, valid UTF-8 poem bytes', async () => {
  const root = mkdtempSync(join(tmpdir(), 'agency-poem-'));
  const previousOutputDir = process.env.MAKEFUN_OUTPUT_DIR;
  try {
    const outputs = [];
    for (const name of ['first', 'second']) {
      const outputDir = join(root, name);
      process.env.MAKEFUN_OUTPUT_DIR = outputDir;
      await import(new URL(`./main.ts?run=${name}`, import.meta.url).href);
      assert.deepEqual(readdirSync(outputDir), ['entry.txt']);
      outputs.push(readFileSync(join(outputDir, 'entry.txt')));
    }
    assert.deepEqual(outputs[0], outputs[1]);
    const poem = new TextDecoder('utf-8', { fatal: true }).decode(outputs[0]);
    assert.deepEqual(Buffer.from(poem, 'utf8'), outputs[0]);
    assert.ok(Array.from(poem).length >= 1 && Array.from(poem).length <= 1000);
    assert.match(poem, /\S/u);
  } finally {
    if (previousOutputDir === undefined) delete process.env.MAKEFUN_OUTPUT_DIR;
    else process.env.MAKEFUN_OUTPUT_DIR = previousOutputDir;
    rmSync(root, { recursive: true, force: true });
  }
});
