import 'server-only'
 
const homeContent = {
  ar: () => import('./home/ar.json').then((module) => module.default),
  en: () => import('./home/en.json').then((module) => module.default),
  fr: () => import('./home/fr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'fr' | 'ar') =>
  homeContent[locale]()