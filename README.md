Electrical Foundations Apprenticeship Prep course under the LearnIT3D brand.

## LearnIt3D mini-app build pipeline

This repository includes a repeatable mobile-first packaging workflow for the interactive 3D course in `/course/3d` using one shared production web build.

## Unified app identity

- Product: `LearnIt3D Electrical Foundations`
- App ID / Bundle ID: `com.learnit3d.electricalfoundations`
- Windows Store identity: `LearnIt3D.ElectricalFoundations`

### Local commands

- `npm install` — install dependencies
- `npm run build:web` — create production web output in `dist/web`
- `npm run verify:smoke` — verify `dist/web/index.html` links all 12 interactive modules
- `npm run sync:android` — sync web build into Android wrapper
- `npm run sync:ios` — sync web build into iOS wrapper
- `npm run package:android:aab` — build Android release bundle (`.aab`)
- `npm run package:ios:archive` — build iOS compatibility archive (`.xcarchive`)
- `npm run package:dir` — create an unpacked desktop build in `dist/desktop`
- `npm run package:win` — create Windows installer + portable executable + AppX in `dist/desktop`

### GitHub Actions

Workflow: `.github/workflows/build-desktop.yml`

This workflow runs four jobs: `verify-web`, `build-android`, `build-ios`, `build-windows`.

It uploads platform artifacts:

- `web-build` → `dist/web`
- `android-aab` → `android/app/build/outputs/bundle/release/*.aab`
- `ios-build` → `dist/ios/LearnIt3D-Electrical-Foundations.xcarchive` and zipped app bundle
- `windows-desktop-build` → `dist/desktop` (NSIS installer, portable EXE, AppX)

## Android signing secrets for Play upload

For signed release AAB output in CI, set these repository secrets:

- `ANDROID_KEYSTORE_BASE64`
- `ANDROID_KEYSTORE_PASSWORD`
- `ANDROID_KEY_ALIAS`
- `ANDROID_KEY_PASSWORD`

If signing secrets are not set, CI still builds the Android release bundle using fallback debug signing for compatibility checks.
