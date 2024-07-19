import React, { Component } from 'react';
import './Navbar.css';
import logo from './image.png';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleNavLinkClick = () => {
    this.setState({ clicked: false });
  };

  handleButtonClick = () => {
    window.location.href = '#Community';
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div id="navbar-right" className={this.state.clicked ? "navbar-right active" : "navbar-right"}>
          <a href="#Home" className="nav-link" id='H' onClick={this.handleNavLinkClick}>Home</a>
          <a href="#Services" className="nav-link" id='H' onClick={this.handleNavLinkClick}>Products</a>
          <a href="#Contact" className="nav-link" id='H' onClick={this.handleNavLinkClick}>Contact</a>
          <button className="nav-button" onClick={this.handleButtonClick}>Join Community</button>
        </div>
        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
