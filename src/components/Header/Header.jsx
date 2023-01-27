import React from "react";

import a from "../../assets/bas.gif";
import "./Header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
      Have your problem solved
      </h1>
      <p>
      Data-driven approaches for your business problems and end-to-end web development for your businesses
      </p>
      <div className="buttondiv">
        <button type="button" className="buttonstyle">
          <a href="#contact" >Contact Us</a>
        </button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={a} alt="" />
    </div>
  </div>
);

export default Header;
