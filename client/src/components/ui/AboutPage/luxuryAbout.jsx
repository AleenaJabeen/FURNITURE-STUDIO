import React from 'react';
import { luxuryAbout } from '../../../assets';
import styles from "../../../css/ShoppingCSS/About.module.css";

function LuxuryAbout() {
  return (
    <>
     <section className={`${styles.luxuryAbout} pt-4 pb-4 px-4`}>
        <div className="container-fluid">
<div className="row">
    <div className={`col-md-6 col-12 py-4`}>
        <img src={luxuryAbout} alt="Luxury" className={`img-fluid h-100 `} />
    </div>
    <div className={`${styles.luxuryDetail} col-md-6 col-12 d-md-flex justify-content-center align-items-start flex-column py-4`}>
    <div className={`${styles.title}`}>
  ABOUT LUXURY
</div>
       <h2>Discover our World of Opulence & Luxury</h2>
       <p>Furniture Studio is more than just interiors, it is a place where the inspirations and dreams become reality. Our team is global and based on talented professionals traveling every nook and cranny of the world to gather the trendiest and exotic interior products at one place. We collaborate with renowned international designers to craft exclusive furniture and premium décor accessories that make your interior spaces a masterpiece. Our inspiration and motivation have always been to provide the clients with what they have been seeking so far under one roof.</p>

    </div>
</div>
        </div>
        </section> 
    </>
  )
}

export default LuxuryAbout;
