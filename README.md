# Lovabies App

React Native onboarding app for the Lovabies assignment.

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

## Build Debug APK

### Option A — Local build (Gradle on your machine)

```bash
npm run build:apk
```

Output:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Option B — Cloud build with Expo EAS (if local build fails)

1. Install EAS CLI: `npm install -g eas-cli`
2. Log in: `eas login`
3. Build: `npm run build:cloud`
4. Download the APK from the link in the terminal or from [expo.dev](https://expo.dev)

Release APK (optional, local only):

```bash
npm run build:apk:release
```

## Project Structure

```
src/
├── assets/images/       # App images
├── components/common/   # Reusable UI components
├── constants/           # Routes, plush options, feature data
├── hooks/               # Responsive layout, parental gate
├── localization/        # i18n config + en.json / pl.json
├── navigation/          # App navigator
├── screens/             # Screen components
├── theme/               # Colors, spacing, typography
├── types/               # Shared TypeScript types
└── utils/               # Helpers
```

## Localization

- Strings: `src/localization/locales/en.json`, `pl.json`
- Screens use `useTranslation()` — no hardcoded UI copy
- Polski uses an i18next post-processor to append `*`

## Testing

```bash
npm test
npm run typecheck
```

## Submission ZIP

```
[YourName]_Assignment.zip
├── LovabiesApp/          # Full source code
├── app-debug.apk         # Built APK
├── README.md
└── demo-recording.mp4    # Screen recording
```

Replace `[YourName]` with your name before submitting.
