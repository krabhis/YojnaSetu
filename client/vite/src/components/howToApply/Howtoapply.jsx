import React from "react";
import "./HowToApply.css";
import { FaUserPlus, FaSearch, FaCheckSquare } from "react-icons/fa";

export default function HowToApply() {
  return (
    <div className="how-to-apply">
      <h2 className="heading">How to Apply</h2>
      <div className="steps-container">
        <div className="step">
          <div className="icon-wrapper">
            <FaUserPlus className="step-icon" />
          </div>
          <div className="step-text">
            <h3 className="step-title">Enter Details</h3>
            <p className="step-desc">
              Start by entering your details to find relevant schemes
            </p>
          </div>
        </div>

        <div className="step">
          <div className="icon-wrapper">
            <FaSearch className="step-icon" />
          </div>
          <div className="step-text">
            <h3 className="step-title">Search</h3>
            <p className="step-desc">
              Our search engine helps you find the relevant schemes
            </p>
          </div>
        </div>

        <div className="step">
          <div className="icon-wrapper">
            <FaCheckSquare className="step-icon" />
          </div>
          <div className="step-text">
            <h3 className="step-title">Select and Apply</h3>
            <p className="step-desc">
              Choose the schemes you're eligible for and apply online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
