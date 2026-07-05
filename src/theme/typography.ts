import { TextStyle } from 'react-native';

import { moderateScale } from '../utils/responsive';

export const fontSizes = {
  xs: moderateScale(12),
  sm: moderateScale(14),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(28),
  xxxl: moderateScale(34),
  display: moderateScale(42),
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const typography = {
  display: {
    fontSize: fontSizes.display,
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(48),
  } satisfies TextStyle,
  title: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(40),
  } satisfies TextStyle,
  subtitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(28),
  } satisfies TextStyle,
  body: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(24),
  } satisfies TextStyle,
  bodyBold: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(24),
  } satisfies TextStyle,
  caption: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(20),
  } satisfies TextStyle,
  button: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(28),
  } satisfies TextStyle,
  equation: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(44),
  } satisfies TextStyle,
} as const;
