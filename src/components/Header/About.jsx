import React from 'react';


import a from '../../assets/about.gif'
import './Header.css';

import { useTranslation } from "react-i18next";



const About = () => {
 
  const { t } = useTranslation();
  return(

    <div className="gpt3__header section__padding" id="about">
      <div className="gpt3__header-image">
        <img src={a} alt="" />
      </div>
  
      <div className="gpt3__header-contenk">
        <h1 className="gradient__text">{t("AboutUs.1")}</h1>
        <p>{t("AboutUs.2")}</p>
  
  
      </div>
    
    </div>
  )

  };

export default About;