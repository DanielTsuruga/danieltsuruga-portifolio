import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import pt from './locales/pt.json'
import en from './locales/en.json'

// Idiomas suportados (código interno) e o rótulo mostrado no Header.
export const LANGUAGES = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

export const STORAGE_KEY = 'tsuruga-lang'

i18n
  // Detecta o idioma salvo (localStorage) ou o do navegador.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    load: 'languageOnly', // trata 'pt-BR' como 'pt'
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // o React já protege contra XSS
    },
    returnObjects: true, // permite ler arrays/objetos (seções, experiências)
  })

export default i18n
