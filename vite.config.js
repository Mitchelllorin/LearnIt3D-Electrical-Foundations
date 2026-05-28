import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const course3dRoot = resolve(__dirname, 'course/3d');
const htmlEntries = readdirSync(course3dRoot)
  .filter((file) => file.endsWith('.html'))
  .reduce((entries, file) => {
    entries[file.replace('.html', '')] = resolve(course3dRoot, file);
    return entries;
  }, {});

export default defineConfig({
  root: course3dRoot,
  base: './',
  build: {
    outDir: resolve(__dirname, 'dist/web'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlEntries
    }
  }
});
