import React from 'react';
import './Header.css'; // Make sure to import the CSS file

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">YojnaSetu</div>

        <div className="nav-items">
          <ul>
            <li><a href="#schemes">Schemes</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
