import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import translationEN from './locales/en/translation.json';
import translationAM from './locales/am/translation.json'; // Import Amharic translations

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    am: {
      translation: translationAM,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
