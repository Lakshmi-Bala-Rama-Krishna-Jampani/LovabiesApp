import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Card } from './Card';
import { RadioButton } from './RadioButton';
import { Typography } from './Typography';
import { spacing } from '../../theme';

export interface LanguageOptionCardProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  testID?: string;
}

export const LanguageOptionCard: React.FC<LanguageOptionCardProps> = ({
  label,
  selected,
  onPress,
  testID,
}) => {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      style={({ pressed }) => [pressed && styles.pressed]}>
      <Card selected={selected} style={styles.card}>
        <View style={styles.row}>
          <RadioButton selected={selected} />
          <Typography variant="bodyBold" style={styles.label}>
            {label}
          </Typography>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  label: {
    flex: 1,
  },
  pressed: {
    opacity: 0.92,
  },
});
