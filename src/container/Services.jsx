import React from 'react'
import { useTranslation } from 'react-i18next';
import dataEn from '../i18n/en/data.json';
import dataEs from './../i18n/es/data.json';
import Accordion from 'react-bootstrap/Accordion';
// import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
  const { i18n } = useTranslation();
  const data = i18n.language === 'en' ? dataEn : dataEs;
  return (
    <div className="container" id="services">
      <section>
        {data.servicesWeb.map(({ title, description, itemUL, moreinfo1, moreinfo2, moreinfo3, proccess, imgURL }, index) => (
          <div className="row spacing" key={index}>
            {/* <div className="col-md-7 col-12"> */}
            <div className="col-12">
              <div className="sub-title">{title}</div>

              <p>{description}</p>
              <ul>
                {itemUL.map((itemUL, indexUL) => (
                  <li key={indexUL}>- {itemUL}</li>
                ))}
              </ul>
              <p>{moreinfo1}</p>

              <Accordion className="main-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{moreinfo3} </Accordion.Header>
                  <Accordion.Body>
                    <div className="etapas" bis_skin_checked="1">
                      {proccess.map(({ title, description }, index) => (
                        <p className="process" key={index}>
                          <span className="process-tite">  {title}</span>
                          {description}    </p>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            {/* <div className="col-md-5 col-12 text-center aos-init aos-animate" data-aos='zoom-in-left' data-aos-duration="1500">
            <img className="img-fluid mt-4" src={imgURL} alt={title} />
          </div> */}
          </div>
        ))
        }
        {
          data.serviceMaintenance.map(({ title, line1, line2, maintenanceone, maintenancetwo, titlemaintenancetwo, line3, imgURL }, index) => (
            <div className="row spacing" key={index}>
              {/* <div className="col-md-7 col-12"> */}
              <div className="col-12">
                <div className="sub-title">{title}</div>
                <p>{line1}</p>
                <p>{line2}</p>
                <ul>
                  {maintenanceone.map((itemUL, indexUL) => (
                    <li key={indexUL}>- {itemUL}</li>
                  ))}
                </ul>
                <Accordion className="main-accordion">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{titlemaintenancetwo}</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {maintenancetwo.map((itemUL, indexUL) => (
                          <li key={indexUL}>- {itemUL}</li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </div>
              {/* <div className="col-md-5 col-12 aos-init aos-animate" data-aos='zoom-in-left' data-aos-duration="1500">
      <img className="img-fluid mt-4"  src={imgURL} alt={title} />
      </div> */}
            </div>
          ))
        }

      </section >

    </div >
  )
}

export default Services