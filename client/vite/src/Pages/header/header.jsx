import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
      <Link to="/" className="logo">YojnaSetu</Link>

        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Schemes</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        <div className="auth-buttons">
          <Link to="/login"><button className="login">Login</button></Link>
          <Link to="/signup"><button className="signup">Sign Up</button></Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
