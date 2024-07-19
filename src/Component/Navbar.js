import React, { Component } from 'react';
import './Navbar.css';
import logo from './image.png';

// Navbar component
class Navbar extends Component {
  // Initial state with 'clicked' set to false
  state = { clicked: false };

  // Toggle the 'clicked' state when the mobile menu icon is clicked
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Close the mobile menu when a navigation link is clicked
  handleNavLinkClick = () => {
    this.setState({ clicked: false });
  };

  // Navigate to the 'Community' section and close the mobile menu
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
        
        {/* Conditional class name for navbar-right based on 'clicked' state */}
        <div id="navbar-right" className={this.state.clicked ? "navbar-right active" : "navbar-right"}>

          {/* Navigation links with onClick handler to close the mobile menu */}
          <a href="#Home" className="nav-link" id='H' onClick={this.handleNavLinkClick}>Home</a>
          <a href="#Services" className="nav-link" id='H' onClick={this.handleNavLinkClick}>Products</a>
          <a href="#Contact" className="nav-link" id='H' onClick={this.handleNavLinkClick}>Contact</a>
          <button className="nav-button" onClick={this.handleButtonClick}>Join Community</button>
        </div>

         {/* Mobile menu icon with onClick handler to toggle 'clicked' state  */}
        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
