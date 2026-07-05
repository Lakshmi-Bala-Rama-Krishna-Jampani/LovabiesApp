import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { colors, typography } from '../../theme';

type TypographyVariant = keyof typeof typography;

export interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = colors.textPrimary,
  align = 'left',
  style,
  children,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[typography[variant], styles.base, { color, textAlign: align }, style]}
      allowFontScaling>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
