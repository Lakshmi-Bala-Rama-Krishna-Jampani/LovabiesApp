# Screen Recording Checklist

Record a single video demonstrating all items below.

## Flow Coverage

- [ ] Launch app on Language Selection screen
- [ ] Select **English** → Confirm → Welcome screen (no asterisks)
- [ ] Go back / restart → Select **Polski** → Confirm → verify `*` on strings
- [ ] Tap **Yes, I have my toy!** → Plush Selection
- [ ] Select Guffy → **Next** → Parental Gate
- [ ] Enter wrong answer → see error
- [ ] Enter correct answer → Landing screen with selected plush
- [ ] Restart flow: Welcome → **No, I don't have one yet!** → Comparison
- [ ] Tap **Maybe later** → Landing (no gate)
- [ ] Repeat Comparison → **Bring a buddy home!** → Parental Gate → Landing

## Device Layouts

- [ ] Phone portrait
- [ ] Phone landscape (rotate device/emulator)
- [ ] Tablet portrait (7" or 10" emulator)
- [ ] Tablet landscape

## Quality Checks

- [ ] No clipped text or buttons
- [ ] Hero images adapt in landscape
- [ ] Comparison table readable on small screen (scroll if needed)
- [ ] Parental gate input and keyboard behave correctly
- [ ] Back navigation works on stack screens

## Suggested Emulator Setup

```bash
# Phone
adb emu avd list

# Tablet - create via Android Studio AVD Manager
# Recommended: Pixel 8 + Pixel Tablet
```

## Recording Tools

- Android Studio Emulator built-in recorder
- OBS Studio
- `adb shell screenrecord /sdcard/demo.mp4`
