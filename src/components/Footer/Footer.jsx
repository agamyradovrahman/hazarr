import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="gpt3__footer section__paddint">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">{t("Social.1")}</h1>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <div className="gpt3__footer-links_dis">
            <div className="lll">
              <a
                href="https://www.linkedin.com/company/khazar-analytics/"
                className="youtube_social"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/khazaranalytics/?igshid=YmMyMTA2M2Y%3D"
                className="youtube_social"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="email">contact@khazaranalytics.com</div>

          <div className="copy">© 2023 Khazar Analytics</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
