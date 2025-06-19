import React from 'react';
import './Home.css';
import hom_banner from "../../assets/hom_banner.png"; // Replace with actual image path

function Home() {
  return (
    <section className="home-section">
      <div className="leftpart">
        <h3 className="title">YojnaSetu — Your Gateway to Every Government Scheme</h3>
        <p className="subtitle">
          For the students, farmers, women, senior citizens, and every citizen of India.
        </p>
        <div className="cta-buttons"> 
          <button className="btn explore">Explore Schemes</button>
          <button className="btn check">Check Eligibility</button>
        </div>
      </div>

      <div className="rightpart">
        <div className="person-card">
          <img src={hom_banner} alt="person" className="person-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;
