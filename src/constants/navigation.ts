export const ROUTES = {
  LANGUAGE_SELECTION: 'LanguageSelection',
  WELCOME: 'Welcome',
  PLUSH_SELECTION: 'PlushSelection',
  COMPARISON: 'Comparison',
  PARENTAL_GATE: 'ParentalGate',
  LANDING: 'Landing',
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
