import React from 'react';
import './SchemeStat.css';
import { FaFileAlt, FaBuilding, FaUniversity, FaSearch } from 'react-icons/fa';

function SchemeStat() {
  return (
    <section className="scheme-section">
      <h2 className="section-title">Total Available Schemes</h2>

      <div className="scheme-cards">
        <div className="scheme-card">
          <FaFileAlt className="scheme-icon" />
          <div>
            <h3 className="scheme-count">500+</h3>
            <p className="scheme-text">Total Schemes Available</p>
          </div>
        </div>

        <div className="scheme-card">
          <FaBuilding className="scheme-icon" />
          <div>
            <h3 className="scheme-count">200+</h3>
            <p className="scheme-text">Total Central Schemes</p>
          </div>
        </div>

        <div className="scheme-card">
          <FaUniversity className="scheme-icon" />
          <div>
            <h3 className="scheme-count">300+</h3>
            <p className="scheme-text">Total Schemes for States</p>
          </div>
        </div>
      </div>

      <div className="scheme-button-wrapper">
        <button className="scheme-button">
          <FaSearch className="button-icon" />
          Find Schemes for You
        </button>
      </div>
    </section>
  );
}

export default SchemeStat;
