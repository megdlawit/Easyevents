import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="navbar-container">
      <header>
        <nav className="navbar">
          <a href='#home' className="logo">Teguadz Arts</a>
          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li onClick={removeActive}>
              <a href='#Registration' className="navLink">Home </a>
            </li>
            <li onClick={removeActive}>
              <a href='#all-products' className="navLink">About</a>
            </li>
            {/* <li onClick={removeActive}>
              <a href='#all-products' className="navLink">Call for Artists</a>
            </li> */}
            <li onClick={removeActive}>
              <a href='#contact' className="navLink">Events</a>
            </li>
            {/* <li onClick={removeActive}>
              <a href='#contact' className="navLink">Winners Spotlight</a>
            </li> */}
            <li onClick={removeActive}>
              <a href='#contact' className="navLink">News & Media</a>
            </li>
            {/* <li onClick={removeActive}>
              <a href='#contact' className="navLink">Gallery</a>
            </li> */}
            <li onClick={removeActive}>
              <a href='#contact' className="navLink">Attach Payment</a>
            </li>
             
             
          </ul>
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
