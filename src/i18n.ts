import { i18n } from '@lingui/core';
import { en, sv } from 'make-plural/plurals';
import { messages as messagesEn } from './locales/en/messages';
import { messages as messagesSv } from './locales/sv/messages';

export type Locales = 'en' | 'sv';

export type LocaleDictionary = {
  [K in Locales]: string;
};

export const locales: LocaleDictionary = {
  en: 'English',
  sv: 'Svenska',
};

export const defaultLocale = 'sv';

i18n.loadLocaleData({
  en: { plurals: en },
  sv: { plurals: sv },
});

i18n.load({
  en: messagesEn,
  sv: messagesSv,
});

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: Locales) {
  //   const { messages } = await import(`./locales/${locale}/messages`);
  //   i18n.load(locale, messages);
  i18n.activate(locale);
}
