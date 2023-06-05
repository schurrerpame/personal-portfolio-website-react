import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MenuInt } from './../components';

import 'aos/dist/aos.css';
import { Contact } from './../container';

import { useTranslation } from 'react-i18next';
import dataEn from '../i18n/en/data';
import dataEs from './../i18n/es/data.json';
import { BsLinkedin } from 'react-icons/bs';

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { t, i18n } = useTranslation();
  const data = i18n.language === 'en' ? dataEn : dataEs;
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container fluid className={isDarkMode ? 'dark-mode' : 'light-mode'} id="topPage">
      <MenuInt isDarkMode={isDarkMode} handleToggle={handleToggle} />

      <div className="bg">
        <div className="container container-cv">
          {/* <p>{t('aboutme.title')}</p> */}
          <p>{t('aboutme.description1')}</p>
          <p>{t('aboutme.description2')}</p>
          <p>{t('aboutme.description3')}</p>
        </div>
      </div>

      <div className="cv">
        <div className="container">
          {data.cv.map(({ title, date, cargo, description, technology, link, textlink }, index) => (
            <div className="row box-cv" key="index">
              <div className="col-12 col-xl-2 box-cv-date" data-aos="fade-in" data-aos-duration="4000">{date}</div>
              <div className="col-12 col-xl-10" data-aos="fade-in" data-aos-duration="4000">
                <div className="title"> {title}</div>
                <div className="position">{cargo}</div>
                <p className="pt-4 fw-bold"> {technology}</p>
                <ul>
                  {description.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>

                {link && <a href={link} alt={`linkedin + ${title}`} target="_blank" rel="noreferrer"><BsLinkedin /> {textlink}</a>}
              </div>
            </div>
          ))}
        </div>


      </div>
      <Contact />
    </Container>
  );
};

export default AboutMe;





