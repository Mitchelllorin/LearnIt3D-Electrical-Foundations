import { accessSync, readFileSync } from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const webDir = path.join(repoRoot, 'dist', 'web');
const indexPath = path.join(webDir, 'index.html');

function assertFileExists(filePath) {
  accessSync(filePath);
}

function assertIncludes(text, expected, message) {
  if (!text.includes(expected)) {
    throw new Error(message);
  }
}

assertFileExists(indexPath);
const indexHtml = readFileSync(indexPath, 'utf8');

for (let moduleNumber = 1; moduleNumber <= 12; moduleNumber += 1) {
  const sceneFile = `scene${String(moduleNumber).padStart(2, '0')}.html`;
  const scenePath = path.join(webDir, sceneFile);
  assertFileExists(scenePath);
  assertIncludes(
    indexHtml,
    `href="${sceneFile}"`,
    `Missing ${sceneFile} entry in dist/web/index.html`
  );
}

console.log('Smoke check passed: full Electrical Foundations course entrypoint is present.');
