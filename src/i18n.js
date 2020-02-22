import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// ruta a los archivos de idiomas
import common_es from './locales/es/translation.json'
import common_fr from './locales/fr/translation.json'

i18n.use(LanguageDetector).init({
  fallbackLng: 'es',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  // react i18next special options (optional)
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
  resources: {
    es: {
      translation: common_es,
    },
    fr: {
      translation: common_fr,
    },
  },
  
})

export default i18n