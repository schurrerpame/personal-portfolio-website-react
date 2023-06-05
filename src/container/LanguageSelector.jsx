import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from './../assets/images';
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;
  return (

    <div>
      {currentLanguage === 'en' && (
        <button class="btn btn-link" onClick={() => changeLanguage('es')}>
          <img src={images.flagES} alt="es" />
        </button>
      )}
      {currentLanguage === 'es' && (
        <button class="btn btn-link" onClick={() => changeLanguage('en')}>
          <img src={images.flagEN} alt="en" />
        </button>
      )}
    </div>


  );
}

export default LanguageSelector;