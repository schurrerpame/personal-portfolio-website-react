import React from 'react';
import { useParams } from 'react-router-dom';
import { Contact } from './../container';
import PageWrapper from './PageWrapper';
import { useTranslation } from 'react-i18next';
import dataEn from '../i18n/en/data';
import dataEs from './../i18n/es/data.json';
import { SiReact, SiWordpress, SiCss3, SiBootstrap, SiTailwindcss, SiFigma, SiPrestashop, SiBem, SiPhp } from 'react-icons/si';
const technologyIcons = {
  bem: SiBem,
  css: SiCss3,
  react: SiReact,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  wordpress: SiWordpress,
  figma: SiFigma,
  prestashop: SiPrestashop,
  php: SiPhp,

};


const Job = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const data = i18n.language === 'en' ? dataEn : dataEs;

  const job = data.works.find((work) => work.id === id);
  const { title, description, cover, technology, linkweb, linkGitHub, cover1, cover2, cover3, moreInfo } = job;

  return (
    <PageWrapper>
      <div className="container">
        {job && (

          <div className="row">
            <div className="col-md-8 col-12 ">  <img src={cover} alt={title} /></div>
            <div className="col-md-4 col-12">   <h3>{title}</h3>
              <p>{description}</p>

              {technology.map((tecno, index) => {
                const IconComponent = technologyIcons[tecno];
                return IconComponent && <span key={index} className="px-2"><IconComponent /></span>;
              })}
            </div>
            <div>
              {cover1 && <img src={cover1} alt="image" />}
              {cover2 && <img src={cover2} alt="image" />}
              {cover3 && <img src={cover3} alt="image" />}

            </div>
          </div>
        )}
      </div>

      <Contact />
    </PageWrapper>
  );
};

export default Job;
