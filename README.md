Electrical Foundations Apprenticeship Prep course under the LearnIT3D brand.

## Desktop build pipeline

This repository now includes a repeatable Electron packaging workflow for the interactive 3D course in `/course/3d`.

### Local commands

- `npm install` — install dependencies
- `npm run build:web` — create production web output in `dist/web`
- `npm run package:dir` — create an unpacked desktop build in `dist/desktop`
- `npm run package:win` — create Windows installer + portable executable in `dist/desktop`

### GitHub Actions

Workflow: `.github/workflows/build-desktop.yml`

It uploads two artifact bundles:

- `web-build` → `dist/web`
- `windows-desktop-build` → `dist/desktop`
