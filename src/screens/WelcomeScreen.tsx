import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
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

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.WELCOME>;

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isLandscapeMode, isTabletDevice } = useResponsive();

  const navigateToPlushSelection = useCallback(() => {
    navigation.navigate(ROUTES.PLUSH_SELECTION);
  }, [navigation]);

  const navigateToComparison = useCallback(() => {
    navigation.navigate(ROUTES.COMPARISON);
  }, [navigation]);

  return (
    <ScreenContainer testID="welcome-screen" scrollable contentStyle={styles.content}>
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
          {t('welcome.title')}
        </Typography>
        <Spacer size="sm" />
        <Typography variant="subtitle" align="center" color="rgba(255,255,255,0.92)">
          {t('welcome.subtitleLine1')}
        </Typography>
        <Typography variant="subtitle" align="center" color="rgba(255,255,255,0.92)">
          {t('welcome.subtitleLine2')}
        </Typography>

        <Spacer size="xl" />

        <View style={[styles.actions, isLandscapeMode && styles.actionsLandscape]}>
          <PrimaryButton
            testID="welcome-has-toy-button"
            label={t('welcome.hasToy')}
            onPress={navigateToPlushSelection}
          />
          <Spacer size="md" />
          <SecondaryButton
            testID="welcome-no-toy-button"
            label={t('welcome.noToy')}
            onPress={navigateToComparison}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 0,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    justifyContent: 'space-between',
  },
  bodyLandscape: {
    paddingTop: spacing.md,
  },
  bodyTablet: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 640,
  },
  actions: {
    width: '100%',
  },
  actionsLandscape: {
    maxWidth: 480,
    alignSelf: 'center',
  },
});
