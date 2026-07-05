import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pl from './locales/pl.json';

export const SUPPORTED_LANGUAGES = ['en', 'pl'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const polishMarkerPostProcessor = {
  type: 'postProcessor' as const,
  name: 'polishMarker',
  process: (
    value: string,
    _key: string,
    _options: unknown,
    translator: { language?: string },
  ): string => {
    if (translator.language === 'pl' && !value.endsWith('*')) {
      return `${value}*`;
    }

    return value;
  },
};

i18n
  .use(polishMarkerPostProcessor)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    postProcess: ['polishMarker'],
  });

export default i18n;
