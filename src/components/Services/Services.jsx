import React from "react";
import ServicesData from "./ServicesData";
import "./Services.css";
import { useTranslation } from "react-i18next";
import de from '../../assets/de.png'
import aa from '../../assets/analit.jpeg'
import data from '../../assets/editedd.jpeg'
import webb from '../../assets/tt.jpeg'

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="aq" id="services">
      <section className="Services topMarign">
        <div className="container">
          <div className="heading">
            <h1 className="baslyk">OUR SERVICES</h1>
          </div>

          <div className="contain grid topMarign">
            

                  <div className="box" >
                    <div className="img">
                      <img src={data} alt="" />
                    </div>
                    <div className="text">
                      <h2>{t('OurServices.2')}</h2>
                      <p>{t('OurServices.3')}</p>
                    </div>
                  </div>

                  <div className="box" >
                    <div className="img">
                      <img src={aa} alt="" />
                    </div>
                    <div className="text">
                      <h2>{t('OurServices.4')}</h2>
                      <p>{t('OurServices.5')}</p>
                    </div>
                  </div> 
 
                  <div className="box" >
                    <div className="img"> 
                      <img src={de} alt="" />
                    </div>
                    <div className="text">
                      <h2>{t('OurServices.6')}</h2>
                      <p>{t('OurServices.7')}</p>
                    </div>
                  </div>

                  <div className="box" >
                    <div className="img">
                      <img src={webb} alt="" />
                    </div>
                    <div className="text">
                      <h2>{t('OurServices.8')}</h2>  
                      <p>{t('OurServices.9')}</p>
                    </div>
                  </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
