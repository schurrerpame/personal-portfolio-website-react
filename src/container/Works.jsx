import React from 'react';
import { useTranslation } from 'react-i18next';
import dataEn from '../i18n/en/data.json';
import dataEs from './../i18n/es/data.json';
import { SiReact, SiWordpress, SiCss3, SiJavascript, SiTailwindcss, SiFigma, SiPrestashop, SiBem, SiPhp } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs'
// import { Link } from 'react-router-dom';

const technologyIcons = {
  bem: SiBem,
  css: SiCss3,
  react: SiReact,
  bootstrap: BsFillBootstrapFill,
  tailwind: SiTailwindcss,
  wordpress: SiWordpress,
  figma: SiFigma,
  prestashop: SiPrestashop,
  php: SiPhp,
  js: SiJavascript

};

const Works = () => {

  const { t, i18n } = useTranslation();
  const data = i18n.language === 'en' ? dataEn : dataEs;
  return (
    <div className="container" id="portfolio">
      <div className="main-title spacing">{t('jobs.title')}</div>
      <div className="row">
        {data.works.map(({ title, technology, id, description, linkweb, linkGitHub, cover, videoMp4 }, index) => (
          <div className="box-job row">
            <div className={`aos-init col-md-6 col-12  ${index % 2 === 0 ? 'order-last text-center text-md-start' : 'order-last  order-md-first text-center text-md-end'}`} data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'} data-aos-duration="1500" key={index}>
              <p className="fw-bold fs-4">{title}</p>
              <p>{description}</p>
              <div className="fs-2 my-3">
                {technology.map((tecno, index) => {
                  const IconComponent = technologyIcons[tecno];

                  return IconComponent && <span key={index} className="px-2"><IconComponent /></span>;
                })}

              </div>
              {/* <Link className="btn btn-dark" to={`/job/${id}`}>More Info</Link>   */}
              {linkweb !== '' && (<a target='_blank' rel="noreferrer" className="btn btn-dark" href={linkweb}> Site</a>)}
              {linkGitHub !== '' && (<a target='_blank' rel="noreferrer" className="btn btn-dark" href={linkGitHub}>GitHub</a>)}

            </div>
            <div className="col-md-6 col-12 mb-4 mb-md-0 aos-init aos-animate" data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'} data-aos-duration="1500">

              {videoMp4 ?
                <video controls loop autoPlay muted width="100%">
                  <source src={videoMp4} type="video/mp4" />
                  {cover & <img src={cover} alt={title} />}
                </video>
                :
                <img src={cover} alt={title} className="img-fluid" />
              }
            </div>
          </div>
        ))}

      </div>
    </div>

  )
}

export default Works