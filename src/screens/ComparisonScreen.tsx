import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  ComparisonTable,
  HeroIllustration,
  PrimaryButton,
  ScreenContainer,
  SecondaryButton,
  Spacer,
  Typography,
} from '../components/common';
import { images } from '../config/assets';
import { ROUTES } from '../constants/navigation';
import { useResponsive } from '../hooks/useResponsive';
import { RootStackParamList } from '../types/navigation';
import { spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.COMPARISON>;

export const ComparisonScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isLandscapeMode, isTabletDevice } = useResponsive();

  const navigateToParentalGate = useCallback(() => {
    navigation.navigate(ROUTES.PARENTAL_GATE, {});
  }, [navigation]);

  const navigateToLanding = useCallback(() => {
    navigation.navigate(ROUTES.LANDING, {});
  }, [navigation]);

  return (
    <ScreenContainer testID="comparison-screen" scrollable contentStyle={styles.content}>
      <HeroIllustration
        portraitSource={images.hero}
        landscapeSource={images.heroWide}
      />

      <View
        style={[
          styles.body,
          isLandscapeMode && styles.bodyLandscape,
          isTabletDevice && styles.bodyTablet,
        ]}>
        <Typography variant="title" align="center">
          {t('comparison.title')}
        </Typography>
        <Spacer size="sm" />
        <Typography variant="subtitle" align="center" color="rgba(255,255,255,0.92)">
          {t('comparison.subtitle')}
        </Typography>

        <Spacer size="lg" />

        <ComparisonTable
          appOnlyLabel={t('comparison.appOnly')}
          appPlusPlushLabel={t('comparison.appPlusPlush')}
          getFeatureLabel={key => t(key)}
        />

        <Spacer size="xl" />

        <PrimaryButton
          testID="comparison-primary-button"
          label={t('comparison.primaryCta')}
          onPress={navigateToParentalGate}
        />
        <Spacer size="md" />
        <SecondaryButton
          testID="comparison-secondary-button"
          label={t('comparison.secondaryCta')}
          onPress={navigateToLanding}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 0,
  },
  body: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  bodyLandscape: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 760,
  },
  bodyTablet: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 760,
  },
});
