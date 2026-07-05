import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { Typography } from './Typography';
import { colors, radius, spacing } from '../../theme';
import { moderateScale } from '../../utils/responsive';

export interface PlushCardProps {
  image: ImageSourcePropType;
  tagline: string;
  selected: boolean;
  onPress: () => void;
  testID?: string;
}

export const PlushCard: React.FC<PlushCardProps> = ({
  image,
  tagline,
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
      accessibilityLabel={tagline}
      style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}>
      <View style={[styles.card, selected && styles.selected]}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.taglineContainer}>
          <Typography variant="caption" align="center">
            {tagline}
          </Typography>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  card: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.transparent,
    backgroundColor: colors.card,
  },
  selected: {
    borderColor: colors.cardSelectedBorder,
  },
  image: {
    width: '100%',
    height: moderateScale(160),
  },
  taglineContainer: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  pressed: {
    opacity: 0.95,
  },
});
