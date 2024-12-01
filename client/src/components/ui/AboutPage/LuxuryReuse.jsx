import React from 'react';
import styles from "../../../css/ShoppingCSS/About.module.css";

function LuxuryAbout(props) {
  return (
    <>

    <div className={`col-md-6 col-12 py-4`}>
        <img src={props.image} alt="Luxury" className={`img-fluid h-100 `} />
    </div>
    <div className={`${styles.luxuryDetail} col-md-6 col-12 d-md-flex justify-content-center align-items-start flex-column py-4`}>
    <div className={`${styles.title}`}>
  {props.title}
</div>
       <h2>{props.name}</h2>
       <p>{props.description}</p>

        </div>
    </>
  )
}

export default LuxuryAbout;
