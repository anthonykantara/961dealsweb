export const fallbackLng = 'en';
export const languages = ['en', 'fr', 'ar'] as const;
export type ValidLanguage = typeof languages[number];