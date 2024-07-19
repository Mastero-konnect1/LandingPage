import React, { Component } from 'react';
import './Navbar.css';
import logo from './image.png'; 

const handleButtonClick = () => {
  window.location.href = '#Community'; 
};

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () =>{
    this.setState({clicked:
      !this.state.clicked
    })
  }
  render() {

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div id="navbar-right" className={this.state.clicked ? 
        "#navbar-right nav-link" : "#navbar-right"}>

        <a href="#Home" className="nav-link" id='H'>Home</a>
        <a href="#Services" className="nav-link" id='H'>Products</a>
        <a href="#Contact" className="nav-link" id='H'>Contact</a>
        <button className="nav-button"  onClick={handleButtonClick}>Join Community</button>
      </div>
      
      <div id='mobile' onClick={this.handleClick}>
        <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};
}

export default Navbar;
