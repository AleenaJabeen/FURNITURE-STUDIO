import React from 'react';
import { aboutLuxury } from '../../../assets';
import '../../../css/ShoppingCSS/Styles.css';

function AboutLuxury() {
  return (
    <>
     <section className="aboutLuxury pt-4 pb-4">
        <div className="container-fluid">
<div className="row">
    <div className="col-md-5 col-12 py-4">
        <img src={aboutLuxury} alt="Luxury" className="img-fluid" />
    </div>
    <div className="aboutDetail col-md-6 col-12 d-md-flex justify-content-center align-items-start flex-column p-4">
    <div className="inline-line">
  <hr className="inline-hr"/>
  <span>ABOUT LUXURY</span>
</div>
       <h2>Bringing you closer to a Premium living standard</h2>
       <p>Kit and Kaboodle takes pride in offering a superior quality interior collection to transform your living space into your dream home.</p>
       <button className='btn px-4 py-2'>Read more</button>
    </div>
</div>
        </div>
        </section> 
    </>
  )
}

export default AboutLuxury
