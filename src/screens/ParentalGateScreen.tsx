import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  ParentalGateInput,
  PrimaryButton,
  ScreenContainer,
  Spacer,
  Typography,
} from '../components/common';
import { ROUTES } from '../constants/navigation';
import { PLUSH_OPTIONS } from '../constants/plush';
import { useParentalGate } from '../hooks/useParentalGate';
import { useResponsive } from '../hooks/useResponsive';
import { RootStackParamList } from '../types/navigation';
import { colors, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.PARENTAL_GATE>;

export const ParentalGateScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { isTabletDevice } = useResponsive();
  const {
    question,
    answerInput,
    errorType,
    isSubmitEnabled,
    setAnswerInput,
    submitAnswer,
  } = useParentalGate();

  const errorMessage = useMemo(() => {
    if (errorType === 'invalid') {
      return t('parentalGate.errorInvalid');
    }

    if (errorType === 'incorrect') {
      return t('parentalGate.errorIncorrect');
    }

    if (errorType === 'attemptsExceeded') {
      return t('parentalGate.attemptsExceeded');
    }

    return undefined;
  }, [errorType, t]);

  const handleSubmit = useCallback(() => {
    const isCorrect = submitAnswer();

    if (isCorrect) {
      navigation.replace(ROUTES.LANDING, {
        selectedPlush: route.params?.selectedPlush,
      });
    }
  }, [navigation, route.params?.selectedPlush, submitAnswer]);

  const selectedPlushName = useMemo(() => {
    if (!route.params?.selectedPlush) {
      return undefined;
    }

    return PLUSH_OPTIONS.find(option => option.id === route.params.selectedPlush)?.name;
  }, [route.params?.selectedPlush]);

  return (
    <ScreenContainer
      testID="parental-gate-screen"
      centered
      contentStyle={[styles.content, isTabletDevice && styles.contentTablet]}>
      <Typography variant="title" align="center">
        {t('parentalGate.title')}
      </Typography>
      <Spacer size="sm" />
      <Typography variant="subtitle" align="center" color="rgba(255,255,255,0.92)">
        {t('parentalGate.subtitle')}
      </Typography>

      {selectedPlushName ? (
        <>
          <Spacer size="xs" />
          <Typography variant="caption" align="center" color={colors.landingAccent}>
            {selectedPlushName}
          </Typography>
        </>
      ) : null}

      <Spacer size="xxl" />

      <Typography
        variant="equation"
        align="center"
        color={colors.equation}
        accessibilityLabel={question.expression}>
        {question.expression}
      </Typography>

      <Spacer size="xl" />

      <View style={styles.form}>
        <ParentalGateInput
          testID="parental-gate-input"
          value={answerInput}
          placeholder={t('parentalGate.placeholder')}
          onChangeText={setAnswerInput}
          errorMessage={errorMessage}
        />

        <Spacer size="xl" />

        <PrimaryButton
          testID="parental-gate-submit-button"
          label={t('parentalGate.next')}
          disabled={!isSubmitEnabled}
          onPress={handleSubmit}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    paddingVertical: spacing.xl,
  },
  contentTablet: {
    maxWidth: 520,
    alignSelf: 'center',
  },
  form: {
    width: '100%',
  },
});
