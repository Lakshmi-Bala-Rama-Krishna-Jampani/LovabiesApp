import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme';

export interface RadioButtonProps {
  selected: boolean;
  testID?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ selected, testID }) => {
  return (
    <View
      testID={testID}
      style={[styles.outer, selected && styles.outerSelected]}
      accessibilityElementsHidden
      importantForAccessibility="no">
      {selected ? <View style={styles.inner} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerSelected: {
    backgroundColor: colors.textPrimary,
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.background,
  },
});
