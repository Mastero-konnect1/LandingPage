// src/components/Services.js

import React from 'react';
import './Services.css';
import serviceImage from './Services.png';

const Services = () => {
  return (
    <div className="services-wrapper" id='Services'>
      <div className="services-container">
        <img src={serviceImage} alt="Service" className="service-image" />
      </div>
    </div>
  );
};

export default Services;
