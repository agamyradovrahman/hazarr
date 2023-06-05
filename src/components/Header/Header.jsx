import React from "react";

import a from "../../assets/iki.jpg";
import "./Head.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="gpt3__headet section__padd" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{t("Header.1")}</h1>
        <p>
        {t("Header.2")}
        </p>
        <div className="buttondiv">
          <button type="button" className="buttonstyle">
            <a href="#contact">{t("Header.3")}</a>
          </button>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={a} alt="" />
      </div>
    </div>
  );
};

export default Header;
