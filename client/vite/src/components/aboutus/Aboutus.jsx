import React from 'react';
import './Aboutus.css';
import { FaInfoCircle, FaBullseye, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Aboutus = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Us</h2>
      <div className="about-icon">
        <FaInfoCircle />
      </div>
      <p className="about-description">
        We are dedicated to bridging the gap between citizens and government schemes.
        Our mission is to provide easy access to all government schemes, ensuring that
        every citizen can take advantage of the benefits they are entitled to.
      </p>

      <div className="about-grid">
        <div className="about-item">
          <FaBullseye className="item-icon" />
          <h3>Our Mission</h3>
          <p>To empower citizens by providing comprehensive information about government schemes.</p>
        </div>
        <div className="about-item">
          <FaUsers className="item-icon" />
          <h3>Who We Serve</h3>
          <p>All citizens looking to benefit from government initiatives and programs.</p>
        </div>
        <div className="about-item">
          <FaShieldAlt className="item-icon" />
          <h3>Our Commitment</h3>
          <p>Providing accurate, up-to-date information and guidance on all available schemes.</p>
        </div>
      </div>

      <button className="about-button">Learn More About Us</button>
    </section>
  );
};

export default Aboutus;
