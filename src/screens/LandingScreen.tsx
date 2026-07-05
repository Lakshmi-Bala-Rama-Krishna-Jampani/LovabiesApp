import React, { useCallback, useMemo } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

import {
  LandingFeatureCard,
  LandingHero,
  PrimaryButton,
  ScreenContainer,
  SecondaryButton,
  Spacer,
} from '../components/common';
import { images } from '../config/assets';
import { ROUTES } from '../constants/navigation';
import { PLUSH_OPTIONS } from '../constants/plush';
import { useResponsive } from '../hooks/useResponsive';
import { RootStackParamList } from '../types/navigation';
import { colors, layout, spacing } from '../theme';
import { moderateScale } from '../utils/responsive';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.LANDING>;

export const LandingScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { isLandscapeMode, isTabletDevice } = useResponsive();

  const selectedPlush = useMemo(() => {
    if (!route.params?.selectedPlush) {
      return undefined;
    }

    return PLUSH_OPTIONS.find(option => option.id === route.params.selectedPlush);
  }, [route.params?.selectedPlush]);

  const selectedPlushLabel = selectedPlush
    ? t('landing.selectedPlush', { name: t(selectedPlush.nameKey) })
    : undefined;

  const handleStartExploring = useCallback(() => {
    Alert.alert(t('landing.startExploringTitle'), t('landing.startExploringMessage'));
  }, [t]);

  const navigateToLanguageSelection = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.LANGUAGE_SELECTION }],
    });
  }, [navigation]);

  const illustration = selectedPlush ? (
    <Image
      source={images[selectedPlush.imageKey]}
      style={styles.selectedImage}
      resizeMode="contain"
      accessibilityIgnoresInvertColors
    />
  ) : (
    <Image
      source={images.heroWide}
      style={styles.heroImage}
      resizeMode="cover"
      accessibilityIgnoresInvertColors
    />
  );

  return (
    <ScreenContainer testID="landing-screen" scrollable contentStyle={styles.content}>
      <LandingHero
        title={t('landing.title')}
        subtitle={t('landing.subtitle')}
        selectedPlushLabel={selectedPlushLabel}
        illustration={illustration}
      />

      <View
        style={[
          styles.cards,
          isLandscapeMode && styles.cardsLandscape,
          isTabletDevice && styles.cardsTablet,
        ]}>
        <LandingFeatureCard
          title={t('landing.exploreTitle')}
          description={t('landing.exploreDescription')}
          icon={
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={layout.iconLg}
              color={colors.landingAccent}
            />
          }
          style={isLandscapeMode || isTabletDevice ? styles.cardHalf : undefined}
        />
        <LandingFeatureCard
          title={t('landing.connectTitle')}
          description={t('landing.connectDescription')}
          icon={
            <MaterialCommunityIcons
              name="teddy-bear"
              size={layout.iconLg}
              color={colors.landingAccent}
            />
          }
          style={isLandscapeMode || isTabletDevice ? styles.cardHalf : undefined}
        />
        <LandingFeatureCard
          title={t('landing.settingsTitle')}
          description={t('landing.settingsDescription')}
          icon={
            <MaterialCommunityIcons
              name="cog-outline"
              size={layout.iconLg}
              color={colors.landingAccent}
            />
          }
          style={isLandscapeMode || isTabletDevice ? styles.cardFull : undefined}
        />
      </View>

      <Spacer size="xl" />

      <PrimaryButton
        testID="landing-start-exploring-button"
        label={t('landing.startExploring')}
        onPress={handleStartExploring}
      />
      <Spacer size="md" />
      <SecondaryButton
        label={t('landing.changeLanguage')}
        onPress={navigateToLanguageSelection}
      />
      <Spacer size="lg" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  selectedImage: {
    width: '100%',
    height: moderateScale(180),
    borderRadius: 16,
    marginBottom: spacing.md,
  },
  heroImage: {
    width: '100%',
    height: moderateScale(160),
    borderRadius: 16,
    marginBottom: spacing.md,
  },
  cards: {
    width: '100%',
    gap: spacing.md,
  },
  cardsLandscape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardsTablet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardHalf: {
    flexBasis: '48%',
  },
  cardFull: {
    flexBasis: '100%',
  },
});
