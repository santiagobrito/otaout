import { copy as es } from './es';
import { copy as en } from './en';

const copy = { es, en } as const;

export type Locale = keyof typeof copy;
export type Copy = typeof es;

export function getCopy(locale: string): Copy {
  return locale === 'en' ? en : es;
}

export default copy;
