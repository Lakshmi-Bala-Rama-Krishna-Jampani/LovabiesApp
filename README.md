# Lovabies App

Production-oriented React Native assignment implementing the Lovabies onboarding flow with responsive UI, localization, typed navigation, and reusable components.

## Overview

The app guides users through:

1. **Language Selection** — English or Polski (Polish appends `*` to all localized strings)
2. **Welcome** — choose whether they own a Lovabies toy
3. **Plush Selection** — if they have a toy (ZeeZee or Guffy)
4. **Comparison / Benefits** — if they do not have a toy yet
5. **Parental Gate** — randomized math challenge before purchase-related actions
6. **Landing** — personalized home screen

## Tech Stack

- React Native 0.86 (CLI)
- TypeScript
- React Navigation (native stack)
- i18next + react-i18next
- react-native-safe-area-context
- react-native-gesture-handler
- react-native-screens
- react-native-vector-icons

## Architecture

```
src/
├── assets/images/          # Bundled PNG assets
├── components/common/      # Reusable UI kit
├── config/                 # Static config (asset registry)
├── constants/              # Route names, feature data, plush options
├── hooks/                  # Responsive + parental gate logic
├── localization/           # i18n setup + locale JSON files
├── navigation/             # App navigator
├── screens/                # Feature screens
├── theme/                  # Design tokens (colors, spacing, typography)
├── types/                  # Shared TypeScript types
└── utils/                  # Responsive scaling + parental gate helpers
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) and [INTERVIEW.md](./INTERVIEW.md) for deeper design notes.

## Prerequisites

- Node.js >= 22.11
- JDK 17+
- Android Studio with SDK 36 (Android 16 target)
- Android emulator or physical device

## Installation

```bash
cd LovabiesApp
npm install
```

## Run on Android

Start Metro:

```bash
npm start
```

In a second terminal:

```bash
npm run android
```

## Build Release APK

```bash
cd android
./gradlew assembleRelease
```

Windows:

```powershell
cd android
.\gradlew.bat assembleRelease
```

APK output:

```
android/app/build/outputs/apk/release/app-release.apk
```

## Localization

- Resource files: `src/localization/locales/en.json`, `pl.json`
- All UI strings use `useTranslation()` — no hardcoded copy in screens
- Selecting **Polski** activates an i18next post-processor that appends `*` to every translated string

Example:

```ts
await i18n.changeLanguage('pl');
t('welcome.title'); // "Welcome!*"
```

## Responsiveness

- `useWindowDimensions()` via `useResponsive()` hook
- Scaling helpers: `scale`, `verticalScale`, `moderateScale`
- Tablet detection (shortest side >= 600dp)
- Landscape-aware layouts (side-by-side cards, wider hero images)
- Content max-width constraints for large screens

## Testing

```bash
npm test
```

Covers localization post-processing, parental gate utilities, and core component rendering.

## Screen Recording Checklist

See [SCREEN_RECORDING_CHECKLIST.md](./SCREEN_RECORDING_CHECKLIST.md).

## Tradeoffs

| Decision | Rationale |
|----------|-----------|
| Native Stack Navigator | Simple flow, native performance, built-in back handling |
| i18next post-processor for `*` | Keeps one set of base strings; demonstrates locale switching without duplicating copy |
| Centralized theme tokens | Consistent purple brand UI and easier design updates |
| Randomized parental gate | Prevents memorization; resets after failed attempts |
| Secondary CTA skips gate | "Maybe later" implies exploration without purchase friction |

## Future Improvements

- Persist language preference with AsyncStorage
- Add real Polish translations instead of English + `*`
- Dark mode theme variant (tokens already centralized)
- Detox E2E tests for full navigation flow
- Animated screen transitions with Reanimated shared elements
- Accessibility audit with TalkBack on physical device

## Submission ZIP Contents

```
[YourName_Assignment.zip]
├── LovabiesApp/                 # Full source
├── app-release.apk              # Release APK
├── README.md                    # This file
└── demo-recording.mp4           # Screen recording
```

Replace `[YourName]` with your name before submitting.
