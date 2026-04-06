import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const patches = [
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'threat-events.mjs'
    ),
    from: './datasets/datasets.mjs',
    to: './datasets.mjs',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'threat-events.js'
    ),
    from: './datasets/datasets.js',
    to: './datasets.js',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'datasets.mjs'
    ),
    from: './datasets/index.mjs',
    to: './datasets.mjs',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'datasets.js'
    ),
    from: './datasets/index.js',
    to: './datasets.js',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'datasets.d.ts'
    ),
    from: './datasets/index.js',
    to: './datasets.js',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'index.mjs'
    ),
    from: './datasets/index.mjs',
    to: './datasets.mjs',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'index.js'
    ),
    from: './datasets/index.js',
    to: './datasets.js',
  },
  {
    file: join(
      root,
      'node_modules',
      'cloudflare',
      'resources',
      'cloudforce-one',
      'threat-events',
      'index.d.ts'
    ),
    from: './datasets/index.js',
    to: './datasets.js',
  },
];

for (const patch of patches) {
  try {
    const content = await readFile(patch.file, 'utf8');
    if (!content.includes(patch.from)) continue;
    await writeFile(patch.file, content.replaceAll(patch.from, patch.to), 'utf8');
    console.log(`patched ${patch.file}`);
  } catch (error) {
    console.warn(`skipped ${patch.file}: ${error.message}`);
  }
}
