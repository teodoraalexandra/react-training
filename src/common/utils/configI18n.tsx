import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import DE from '../../assets/i18n/de.json';
import EN from '../../assets/i18n/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: DE,
      },
      en: {
        translation: EN,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
  });

export default i18n;
