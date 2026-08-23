import { es, type Translations } from './es';
import { en } from './en';

export const defaultLocale = 'es' as const;
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Translations> = {
  es,
  en,
};

export function getTranslations(locale?: string): Translations {
  if (locale && locale in dictionaries) {
    return dictionaries[locale as Locale];
  }
  return dictionaries[defaultLocale];
}