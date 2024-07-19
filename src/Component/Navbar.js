import React from 'react';
import './Navbar.css';
import logo from './image.png'; 

const handleButtonClick = () => {
  window.location.href = 'https://mastero-konnect1.github.io/MKNextGen/'; 
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <a href="#Home" className="nav-link" id='H'>Home</a>
        <a href="#Services" className="nav-link" id='H'>Products</a>
        <a href="#Contact" className="nav-link" id='H'>Contact</a>
        <button className="nav-button" onClick={handleButtonClick}>Join Community</button>
      </div>
    </div>
  );
};

export default Navbar;
