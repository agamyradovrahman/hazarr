import React from 'react';
import logo from "../../khazarana1.png";
import './Footer.css';
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <div className="gpt3__footer section__padding" id="contact">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <div className="gpt3__footer-links_dis">
        <h4>Socials</h4>
        <div className="lll">
          <a
            href="https://www.instagram.com/manchesterunited/"
            className="youtube_social"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/manchesterunited/"
            className="youtube_social"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/manchesterunited/"
            className="youtube_social"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    
    </div>

  </div>
);

export default Footer;