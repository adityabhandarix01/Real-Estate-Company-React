import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>
        <div className='flexColStart f-left'>
          <img src='./log2.png' alt='' width={120} />
          <span className='secondaryText'>
            Our vision is to make a beautiful space for all humanity to prosper.
          </span>
        </div>

        <div className='f-right flexColStart'>
          <span className='primaryText'>Information</span>
          <span className='secondaryText'>145 New York, FL 4523, USA</span>

          <div className='flexCenter f-menu'>
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
