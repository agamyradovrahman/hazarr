import React from 'react';


import a from '../../assets/111.gif'
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>


    </div>

    <div className="gpt3__header-image">
      <img src={a} alt="" />
    </div>
  </div>
);

export default Header;