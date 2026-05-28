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

## iOS signing secrets for App Store/TestFlight export

For signed iOS archive + optional IPA export in CI, set:

- `IOS_BUILD_CERTIFICATE_BASE64` (P12 certificate)
- `IOS_BUILD_CERTIFICATE_PASSWORD`
- `IOS_KEYCHAIN_PASSWORD`
- `IOS_BUILD_PROVISION_PROFILE_BASE64`
- `IOS_DEVELOPMENT_TEAM`
- `IOS_PROVISIONING_PROFILE_SPECIFIER`
- `IOS_CODE_SIGN_IDENTITY`
- `IOS_EXPORT_METHOD` (`app-store`, `ad-hoc`, `development`, or `enterprise`)

If iOS signing secrets are not set, CI still produces an unsigned compatibility archive.
