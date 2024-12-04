import React from 'react';
import "../../../css/ShoppingCSS/Styles.css";
import { carousel1, carousel2 } from '../../../assets';

function Carousel() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption d-flex justify-content-center align-items-center h-100">
              <h3 className="display-4 text-center fw-bold" style={{letterSpacing:"1.5rem"}}>NEW ARRIVALS</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption d-flex justify-content-center align-items-center h-100">
              <h3 className="display-4 text-center fw-bold" style={{letterSpacing:"1.5rem"}}>NEW ARRIVALS</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
