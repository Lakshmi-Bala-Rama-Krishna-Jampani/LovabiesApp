# Lovabies App

React Native onboarding app with language selection, plush flow, parental gate, and landing screen.

## App Flow

1. **Language Selection** — English or Polski (`*` appended to all strings in Polski)
2. **Welcome** — choose whether the user has a toy
3. **Plush Selection** — if they have a toy
4. **Comparison** — if they do not have a toy yet
5. **Parental Gate** — math challenge before purchase-related actions
6. **Landing** — home screen

## Tech Stack

- React Native 0.86 (CLI)
- TypeScript
- React Navigation (native stack)
- i18next + react-i18next

## Prerequisites

- Node.js >= 22.11
- JDK 17+
- Android Studio with SDK 36 (Android 16)
- Android emulator or physical device

## Setup

```bash
npm install
```

## Run on Android

Terminal 1:

```bash
npm start
```

Terminal 2:

```bash
npm run android
```

## Build APK

### Local build

```bash
npm run build:apk
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Cloud build (Expo EAS)

```bash
npm install -g eas-cli
eas login
npm run build:cloud
```

Download the APK from the terminal link or [expo.dev](https://expo.dev).

### Release build (local, optional)

```bash
npm run build:apk:release
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

## Project Structure

```
src/
├── assets/images/
├── components/common/
├── constants/
├── hooks/
├── localization/
├── navigation/
├── screens/
├── theme/
├── types/
└── utils/
```

## Localization

- Resource files: `src/localization/locales/en.json`, `pl.json`
- Screens use `useTranslation()` for all UI copy
- Polski locale appends `*` via an i18next post-processor

## Testing

```bash
npm test
npm run typecheck
```
