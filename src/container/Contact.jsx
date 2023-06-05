import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithubSquare, FaLinkedin, FaArrowAltCircleUp } from 'react-icons/fa';


const Contact = () => {

  const { t } = useTranslation();
  return (
    <footer id="contact">
      <section className="bg contact section">
        <div className="container">
          <div className="main-title">{t('contact.title')} </div>
          <p className="my-5 text-center"> {t('contact.description')} </p>
          <div className="display-4 text-center">
            <a href="https://github.com/schurrerpame" rel="noreferrer" target="_blank" alt="github"><FaGithubSquare /></a> <a href="https://www.linkedin.com/in/pamela-celeste-schurrer/" rel="noreferrer" target="_blank" alt="Linkedin"><FaLinkedin /></a>
          </div>
        </div>
      </section>
      <div className="top">
        © 2023 Pame Schurrer <a href="#top"><FaArrowAltCircleUp /></a>
      </div>
    </footer>

  )
}

export default Contact