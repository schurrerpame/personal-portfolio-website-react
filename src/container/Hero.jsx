import React from 'react';
import { useTranslation } from 'react-i18next';
import fotoPame from '../assets/pame-schurrer.png'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="container hero">
      <div className="row">
        <div className="col-xxl-9 col-md-8 col-12">
          <h1>{t('hero.title')}</h1>
          <h2><mark>{t('hero.subtitle')}</mark></h2>
         
        </div>
        <div className="col-xxl-3 col-md-4 col-12">
          <img className="img-fluid" src={fotoPame} alt="" />
        
        </div>
      </div>
    </div>
  
  )
}

export default Hero