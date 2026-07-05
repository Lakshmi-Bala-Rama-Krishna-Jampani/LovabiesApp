import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { colors, radius, spacing } from '../../theme';

export interface CardProps {
  children: React.ReactNode;
  selected?: boolean;
  style?: ViewStyle;
  testID?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  selected = false,
  style,
  testID,
}) => {
  return (
    <View
      testID={testID}
      style={[styles.card, selected && styles.selected, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: colors.transparent,
  },
  selected: {
    borderColor: colors.cardSelectedBorder,
  },
});
