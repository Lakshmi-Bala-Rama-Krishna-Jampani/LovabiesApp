# Interview Preparation Guide

## Elevator Pitch

"I built a typed React Native onboarding flow with a reusable UI kit, resource-based localization with locale-aware post-processing, responsive layouts for phones/tablets in both orientations, and a parental gate with brute-force protection."

## Expected Questions & Strong Answers

### Why React Navigation native stack?

Native stack provides platform-native transitions, efficient memory usage for linear onboarding, and first-class TypeScript route param support. The flow is sequential with limited branching, so a stack is simpler than tabs or a drawer.

### How does localization work?

All strings are in JSON resource files consumed through i18next. Screens never hardcode copy. When Polski is selected, a post-processor appends `*` to demonstrate locale activation without maintaining duplicate translation files during the assignment phase.

### How is responsiveness handled?

`useWindowDimensions` drives a `useResponsive` hook exposing tablet/landscape flags and dynamic padding/max-width. Layouts adapt with flexbox and conditional styles rather than fixed pixel positioning.

### Why extract `useParentalGate`?

It isolates validation, attempt counting, and question regeneration from UI. This keeps the screen component focused on presentation and makes the logic unit-testable.

### How would you add real Polish translations?

Add translated values in `pl.json`, remove or conditionally disable the asterisk post-processor, and optionally persist locale with AsyncStorage on app launch.

### Performance considerations?

- Local bundled images
- Minimal re-renders via `useCallback`
- No global store overhead for a linear flow
- Hermes enabled by default in RN 0.86

### Accessibility approach?

Semantic roles on interactive elements, live regions for errors, scalable text, sufficient contrast on purple backgrounds, and 48dp minimum touch targets.

### What would you improve next?

Detox E2E tests, persisted preferences, skeleton loading states, haptic feedback on selection, and Lottie micro-animations on the landing hero.

## Dependency Justification

| Package | Why |
|---------|-----|
| `@react-navigation/native-stack` | Typed stack navigation |
| `react-native-safe-area-context` | Notch/tablet safe areas |
| `react-native-gesture-handler` | Required by navigation + future gestures |
| `react-native-screens` | Native screen containers |
| `i18next` | Production-grade i18n |
| `react-native-vector-icons` | Comparison check/cross icons |

## Architecture Walkthrough Script

1. Start at `App.tsx` — providers + navigator
2. Show `theme/` tokens — design system foundation
3. Show `components/common/` — reusable UI kit
4. Walk one screen — Language Selection (state + i18n + navigation)
5. Show parental gate hook — separation of concerns
6. Show tests — localization and utils
