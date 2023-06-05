import React from 'react'
import { Skills } from './../components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



const About = () => {
  const { t } = useTranslation();
  return (
    <section className="bg" id="aboutme">
      <div className="container">
        <div className="main-title spacing">{t('skills.title')}</div>
        <div className="about">
          <div className="text-center">
            <p>{t('skills.description1')}
              {t('skills.description2')}</p>
            <p>{t('skills.description3')}
              {t('skills.description4')}</p>
          </div>
          <div className="spacing">
            <Skills />
            <div className="mt-5 text-center">
              <Link className="btn btn-dark" to="/about">{t('skills.link')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About