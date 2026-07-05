import { SupportedLanguage } from '../localization/i18n';

export interface LanguageOption {
  id: SupportedLanguage;
  labelKey: 'languages.english' | 'languages.polish';
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { id: 'en', labelKey: 'languages.english' },
  { id: 'pl', labelKey: 'languages.polish' },
];
