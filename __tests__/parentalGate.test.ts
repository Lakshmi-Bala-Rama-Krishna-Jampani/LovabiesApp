import {
  generateParentalGateQuestion,
  MAX_PARENTAL_GATE_ATTEMPTS,
  parseNumericAnswer,
} from '../src/utils/parentalGate';

describe('parentalGate utils', () => {
  it('generates a question with a numeric answer', () => {
    const question = generateParentalGateQuestion();

    expect(question.expression.length).toBeGreaterThan(0);
    expect(Number.isInteger(question.answer)).toBe(true);
  });

  it('parses valid numeric answers', () => {
    expect(parseNumericAnswer('30')).toBe(30);
    expect(parseNumericAnswer(' 12 ')).toBe(12);
  });

  it('rejects invalid numeric answers', () => {
    expect(parseNumericAnswer('abc')).toBeNull();
    expect(parseNumericAnswer('12.5')).toBeNull();
    expect(parseNumericAnswer('')).toBeNull();
  });

  it('defines a maximum attempt threshold', () => {
    expect(MAX_PARENTAL_GATE_ATTEMPTS).toBeGreaterThan(0);
  });
});
