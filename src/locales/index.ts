import { en } from './en';
import { es } from './es';
import type { Language } from '../types/index';

export const translations = { en, es };

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function t(lang: Language, key: string): string {
  return getTranslation(lang, key);
}
