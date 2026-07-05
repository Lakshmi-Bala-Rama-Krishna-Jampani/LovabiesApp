import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

import { useResponsive } from '../../hooks/useResponsive';
import { colors } from '../../theme';
import { moderateScale } from '../../utils/responsive';

export interface HeroIllustrationProps {
  portraitSource: ImageSourcePropType;
  landscapeSource: ImageSourcePropType;
  testID?: string;
}

export const HeroIllustration: React.FC<HeroIllustrationProps> = ({
  portraitSource,
  landscapeSource,
  testID,
}) => {
  const { isLandscapeMode, width } = useResponsive();
  const source = isLandscapeMode ? landscapeSource : portraitSource;

  return (
    <View testID={testID} style={styles.container}>
      <Image
        source={source}
        style={[
          styles.image,
          {
            width: width,
            height: isLandscapeMode ? moderateScale(180) : moderateScale(260),
          },
        ]}
        resizeMode="cover"
        accessibilityIgnoresInvertColors
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    overflow: 'hidden',
  },
  image: {
    alignSelf: 'center',
  },
});
