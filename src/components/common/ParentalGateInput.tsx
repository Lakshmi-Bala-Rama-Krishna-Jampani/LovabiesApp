import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Typography } from './Typography';
import { colors, radius, shadows, spacing } from '../../theme';
import { moderateScale } from '../../utils/responsive';

export interface ParentalGateInputProps {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  errorMessage?: string;
  testID?: string;
}

export const ParentalGateInput: React.FC<ParentalGateInputProps> = ({
  value,
  placeholder,
  onChangeText,
  errorMessage,
  testID,
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        testID={testID}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.inputPlaceholder}
        keyboardType="number-pad"
        returnKeyType="done"
        style={styles.input}
        accessibilityLabel={placeholder}
        maxLength={6}
      />
      {errorMessage ? (
        <Typography
          variant="caption"
          color={colors.error}
          align="center"
          accessibilityLiveRegion="polite"
          style={styles.error}>
          {errorMessage}
        </Typography>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  input: {
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
    borderRadius: radius.lg,
    minHeight: moderateScale(56),
    paddingHorizontal: spacing.lg,
    fontSize: moderateScale(18),
    ...shadows.md,
  },
  error: {
    marginTop: spacing.sm,
  },
});
