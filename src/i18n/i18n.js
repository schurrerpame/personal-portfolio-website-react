import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './es/translation.json';
import translationEN from './en/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: translationEN, 
      },
      es: {
        translation: translationES, 
      },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;