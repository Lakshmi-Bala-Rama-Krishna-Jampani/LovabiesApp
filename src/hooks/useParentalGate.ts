import { useCallback, useMemo, useState } from 'react';

import {
  generateParentalGateQuestion,
  MAX_PARENTAL_GATE_ATTEMPTS,
  parseNumericAnswer,
  ParentalGateQuestion,
} from '../utils/parentalGate';

export type ParentalGateErrorType = 'invalid' | 'incorrect' | 'attemptsExceeded' | null;

export interface UseParentalGateResult {
  question: ParentalGateQuestion;
  answerInput: string;
  errorType: ParentalGateErrorType;
  attemptsRemaining: number;
  isSubmitEnabled: boolean;
  setAnswerInput: (value: string) => void;
  submitAnswer: () => boolean;
  resetQuestion: () => void;
}

export const useParentalGate = (): UseParentalGateResult => {
  const [question, setQuestion] = useState<ParentalGateQuestion>(() =>
    generateParentalGateQuestion(),
  );
  const [answerInput, setAnswerInput] = useState('');
  const [errorType, setErrorType] = useState<ParentalGateErrorType>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);

  const attemptsRemaining = MAX_PARENTAL_GATE_ATTEMPTS - failedAttempts;

  const isSubmitEnabled = useMemo(() => {
    return answerInput.trim().length > 0;
  }, [answerInput]);

  const resetQuestion = useCallback(() => {
    setQuestion(generateParentalGateQuestion());
    setAnswerInput('');
    setErrorType(null);
    setFailedAttempts(0);
  }, []);

  const setAnswerInputSafe = useCallback((value: string) => {
    setAnswerInput(value.replace(/[^\d-]/g, ''));
    setErrorType(null);
  }, []);

  const submitAnswer = useCallback((): boolean => {
    const parsedAnswer = parseNumericAnswer(answerInput);

    if (parsedAnswer === null) {
      setErrorType('invalid');
      return false;
    }

    if (parsedAnswer === question.answer) {
      setErrorType(null);
      setFailedAttempts(0);
      return true;
    }

    const nextAttempts = failedAttempts + 1;

    if (nextAttempts >= MAX_PARENTAL_GATE_ATTEMPTS) {
      setQuestion(generateParentalGateQuestion());
      setAnswerInput('');
      setFailedAttempts(0);
      setErrorType('attemptsExceeded');
      return false;
    }

    setFailedAttempts(nextAttempts);
    setErrorType('incorrect');
    setAnswerInput('');
    return false;
  }, [answerInput, failedAttempts, question.answer]);

  return {
    question,
    answerInput,
    errorType,
    attemptsRemaining,
    isSubmitEnabled,
    setAnswerInput: setAnswerInputSafe,
    submitAnswer,
    resetQuestion,
  };
};
