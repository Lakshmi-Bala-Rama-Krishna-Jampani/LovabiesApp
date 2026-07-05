import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  LanguageOptionCard,
  PrimaryButton,
  ScreenContainer,
  Spacer,
  Typography,
} from '../components/common';
import { LANGUAGE_OPTIONS } from '../constants/languages';
import { ROUTES } from '../constants/navigation';
import { useResponsive } from '../hooks/useResponsive';
import i18n, { SupportedLanguage } from '../localization/i18n';
import { RootStackParamList } from '../types/navigation';
import { spacing } from '../theme';

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.LANGUAGE_SELECTION
>;

export const LanguageSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isLandscapeMode, isTabletDevice } = useResponsive();
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('en');

  const handleConfirm = useCallback(() => {
    i18n.changeLanguage(selectedLanguage).then(() => {
      navigation.replace(ROUTES.WELCOME);
    });
  }, [navigation, selectedLanguage]);

  return (
    <ScreenContainer
      testID="language-selection-screen"
      contentStyle={[
        styles.content,
        isLandscapeMode && styles.contentLandscape,
      ]}>
      <View style={[styles.main, isTabletDevice && styles.mainTablet]}>
        <View style={styles.header}>
          <Typography variant="title">{t('languageSelection.title')}</Typography>
          <Spacer size="sm" />
          <Typography variant="subtitle" color="rgba(255,255,255,0.9)">
            {t('languageSelection.subtitle')}
          </Typography>
        </View>

        <Spacer size="xl" />

        <View style={styles.options}>
          {LANGUAGE_OPTIONS.map(option => (
            <LanguageOptionCard
              key={option.id}
              testID={`language-option-${option.id}`}
              label={t(option.labelKey)}
              selected={selectedLanguage === option.id}
              onPress={() => setSelectedLanguage(option.id)}
            />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          testID="language-confirm-button"
          label={t('languageSelection.confirm')}
          onPress={handleConfirm}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-between',
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
  },
  contentLandscape: {
    paddingTop: spacing.lg,
  },
  main: {
    flex: 1,
  },
  mainTablet: {
    justifyContent: 'center',
  },
  header: {
    width: '100%',
  },
  options: {
    width: '100%',
  },
  footer: {
    width: '100%',
    paddingTop: spacing.lg,
  },
});
