export interface ParentalGateQuestion {
  expression: string;
  answer: number;
}

const MAX_OPERAND = 9;
const MAX_ATTEMPTS = 3;

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createAdditionQuestion = (): ParentalGateQuestion => {
  const a = randomInt(2, MAX_OPERAND);
  const b = randomInt(2, MAX_OPERAND);
  return {
    expression: `${a} + ${b}`,
    answer: a + b,
  };
};

const createSubtractionQuestion = (): ParentalGateQuestion => {
  const a = randomInt(4, MAX_OPERAND + 4);
  const b = randomInt(1, a - 1);
  return {
    expression: `${a} - ${b}`,
    answer: a - b,
  };
};

const createMultiplicationQuestion = (): ParentalGateQuestion => {
  const a = randomInt(2, 6);
  const inner = randomInt(1, 4);
  const b = inner + randomInt(0, 2);
  return {
    expression: `${a} x (${inner} + ${b - inner})`,
    answer: a * b,
  };
};

export const generateParentalGateQuestion = (): ParentalGateQuestion => {
  const generators = [
    createAdditionQuestion,
    createSubtractionQuestion,
    createMultiplicationQuestion,
  ];
  const index = randomInt(0, generators.length - 1);
  return generators[index]();
};

export const parseNumericAnswer = (value: string): number | null => {
  const trimmed = value.trim();
  if (!/^-?\d+$/.test(trimmed)) {
    return null;
  }

  return Number.parseInt(trimmed, 10);
};

export const MAX_PARENTAL_GATE_ATTEMPTS = MAX_ATTEMPTS;
