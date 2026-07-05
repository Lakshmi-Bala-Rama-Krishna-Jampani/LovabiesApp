import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  PlushCard,
  PrimaryButton,
  ScreenContainer,
  Spacer,
  Typography,
} from '../components/common';
import { images } from '../config/assets';
import { ROUTES } from '../constants/navigation';
import { PLUSH_OPTIONS, PlushId } from '../constants/plush';
import { useResponsive } from '../hooks/useResponsive';
import { RootStackParamList } from '../types/navigation';
import { spacing } from '../theme';

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.PLUSH_SELECTION
>;

export const PlushSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isLandscapeMode, isTabletDevice } = useResponsive();
  const [selectedPlush, setSelectedPlush] = useState<PlushId>('zeezee');

  const handleNext = useCallback(() => {
    navigation.navigate(ROUTES.PARENTAL_GATE, { selectedPlush });
  }, [navigation, selectedPlush]);

  return (
    <ScreenContainer
      testID="plush-selection-screen"
      scrollable
      contentStyle={styles.content}>
      <Typography variant="title">{t('plushSelection.title')}</Typography>
      <Spacer size="sm" />
      <Typography variant="subtitle" color="rgba(255,255,255,0.92)">
        {t('plushSelection.subtitle')}
      </Typography>

      <Spacer size="xl" />

      <View
        style={[
          styles.cards,
          isLandscapeMode && styles.cardsLandscape,
          isTabletDevice && styles.cardsTablet,
        ]}>
        {PLUSH_OPTIONS.map(option => (
          <View
            key={option.id}
            style={[
              styles.cardWrapper,
              isLandscapeMode && styles.cardWrapperLandscape,
              isTabletDevice && styles.cardWrapperTablet,
            ]}>
            <PlushCard
              testID={`plush-card-${option.id}`}
              image={images[option.imageKey]}
              tagline={t(option.taglineKey)}
              selected={selectedPlush === option.id}
              onPress={() => setSelectedPlush(option.id)}
            />
          </View>
        ))}
      </View>

      <Spacer size="xl" />

      <PrimaryButton
        testID="plush-next-button"
        label={t('plushSelection.next')}
        onPress={handleNext}
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
  cards: {
    width: '100%',
  },
  cardsLandscape: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  cardsTablet: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  cardWrapper: {
    width: '100%',
    marginBottom: spacing.md,
  },
  cardWrapperLandscape: {
    flex: 1,
    marginBottom: 0,
  },
  cardWrapperTablet: {
    flex: 1,
    marginBottom: 0,
  },
});
