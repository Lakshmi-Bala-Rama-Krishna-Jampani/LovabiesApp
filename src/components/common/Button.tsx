import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import { colors, layout, radius, shadows, spacing, typography } from '../../theme';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  label: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  containerStyle?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  fullWidth = true,
  disabled = false,
  containerStyle,
  accessibilityLabel,
  ...rest
}) => {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      {...rest}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled: Boolean(disabled) }}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        isPrimary ? styles.primary : styles.secondary,
        pressed && !disabled && (isPrimary ? styles.primaryPressed : styles.secondaryPressed),
        disabled && styles.disabled,
        containerStyle,
      ]}>
      <Text
        style={[
          typography.button,
          isPrimary ? styles.primaryLabel : styles.secondaryLabel,
          disabled && styles.disabledLabel,
        ]}
        allowFontScaling>
        {label}
      </Text>
    </Pressable>
  );
};

export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>> = props => (
  <Button {...props} variant="primary" />
);

export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = props => (
  <Button {...props} variant="secondary" />
);

const styles = StyleSheet.create({
  base: {
    minHeight: layout.minTouchTarget,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  fullWidth: {
    width: '100%',
  },
  primary: {
    backgroundColor: colors.primaryButton,
  },
  primaryPressed: {
    backgroundColor: colors.primaryButtonPressed,
  },
  secondary: {
    backgroundColor: colors.secondaryButton,
  },
  secondaryPressed: {
    opacity: 0.92,
  },
  disabled: {
    opacity: 0.55,
  },
  primaryLabel: {
    color: colors.textPrimary,
  },
  secondaryLabel: {
    color: colors.secondaryButtonText,
  },
  disabledLabel: {
    opacity: 0.8,
  },
});
