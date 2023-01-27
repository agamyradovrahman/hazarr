import React from 'react';


import a from '../../assets/about.gif'
import './Header.css';

const About = () => (
  <div className="gpt3__header section__padding" id="about">
    <div className="gpt3__header-image">
      <img src={a} alt="" />
    </div>

    <div className="gpt3__header-contenk">
      <h1 className="gradient__text">About Us</h1>
      <p>Khazar Analytics is a start-up company with a team of data scientists and web developers. We provide Data Services, Website Development and Branding to have happy customers. Our aim is to increase the business value and help to grow in revenue not only in real world but also in digital world. If you are looking for reliable solutions for your business problems or pain points, have a look at our list of services we provide. For us, success in work is not only dependent on temporary income, but on the success of our clients.</p>


    </div>
  
  </div>
);

export default About;