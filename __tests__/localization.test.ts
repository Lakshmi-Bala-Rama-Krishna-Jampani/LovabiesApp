import i18n from '../src/localization/i18n';

describe('localization', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('returns English strings without asterisk suffix', () => {
    expect(i18n.t('welcome.title')).toBe('Welcome!');
  });

  it('appends asterisk suffix for Polish locale via post processor', async () => {
    await i18n.changeLanguage('pl');
    expect(i18n.t('welcome.title')).toBe('Welcome!*');
    expect(i18n.t('plushSelection.next')).toBe('Next*');
    expect(i18n.t('plushSelection.zeezeeName')).toBe('ZeeZee*');
    expect(i18n.t('common.brandName')).toBe('Lovabies*');
  });
});
