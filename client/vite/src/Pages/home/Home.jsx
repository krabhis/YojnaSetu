import React from 'react';
import './Home.css';
import hom_banner from "../../assets/hom_banner.png"; 
import SchemeStat from "../../components/schemestat/SchemeStat";
import Categorygrid from "../../components/categorygrid/Categorygrid";
import HowToApply from '../../components/howToApply/Howtoapply';
import Aboutus from '../../components/aboutus/Aboutus';

function Home() {
  return (
    <>
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
          <img src={hom_banner} alt="person" className="person-img" />
        
      </div>
    </section>
    <section className='SchemeStats'>
       <SchemeStat/>
    </section>
    <section className='Categorygrid'>
      <Categorygrid/>
    </section>
     <section className='Categorygrid'>
      <HowToApply/>
    </section>
    <section>
      <Aboutus/>
    </section>
    </>
  );
}

export default Home;
