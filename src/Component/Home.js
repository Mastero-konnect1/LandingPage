import React from 'react';
import './Home.css';
import logo from './home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const handleButtonClick = () => {
  window.location.href = 'https://chat.whatsapp.com/HxqZjQJqI37KZAwZoQSeRs'; 
};


function Home() {
  return (
    <div className='App' id='Home'>
    <div className="container">
      <div className="text">
        <h1 className='A1'>Join the community of <span className='C'>Experts</span> and <span className='D'>Learners</span> who are helping each other define and achieve success.</h1>
        <button className='B' onClick={handleButtonClick}>Join Community <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '20px', paddingLeft: '5px', fontWeight: 'bolder' }}/></button>
      </div>
      <div className="image">
        <img src={logo} alt="Sample" />
      </div>
    </div>
    </div>
  );
}

export default Home;
