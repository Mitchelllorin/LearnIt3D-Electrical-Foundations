import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { build } from 'vite';

const repoRoot = process.cwd();
const sourceDir = path.join(repoRoot, 'course', '3d');
const outputDir = path.join(repoRoot, 'dist', 'web');

function copyNonHtmlFiles(sourcePath, destinationPath) {
  const entries = readdirSync(sourcePath);

  for (const entry of entries) {
    const sourceEntry = path.join(sourcePath, entry);
    const destinationEntry = path.join(destinationPath, entry);
    const entryStats = statSync(sourceEntry);

    if (entryStats.isDirectory()) {
      copyNonHtmlFiles(sourceEntry, destinationEntry);
      continue;
    }

    if (!entry.endsWith('.html')) {
      mkdirSync(path.dirname(destinationEntry), { recursive: true });
      cpSync(sourceEntry, destinationEntry);
    }
  }
}

await build();
copyNonHtmlFiles(sourceDir, outputDir);
