export const languages = {
  en: { name: 'English', code: 'en', dir: 'ltr' },
  ar: { name: 'العربية', code: 'ar', dir: 'rtl' },
  fr: { name: 'Français', code: 'fr', dir: 'ltr' }
} as const

export type Language = keyof typeof languages