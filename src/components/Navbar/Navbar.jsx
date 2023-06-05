import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../khazarana1.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar " id="navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img className="logosize" src={logo} alt="" />
        </div>
        <div className="gtp3_diller">
          <div className="gtp3_dil">
            <div onClick={()=>handleClick('en')}>sasa</div>
            <div onClick={()=>handleClick('az')}>wewe</div>
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#home">{t('Home.1')}</a>
            </p>
            <p> 
              <a href="#services">{t('Services.1')}</a>
            </p>
            <p>
              <a href="#about">{t('About.1')}</a>
            </p>
            <p>
              <a href="#contact">{t('Contact.1')}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="rgb(7 8 20)"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="rgb(7 8 20)"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#services">Services</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
