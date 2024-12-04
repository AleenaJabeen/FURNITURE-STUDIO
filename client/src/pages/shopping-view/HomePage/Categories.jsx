import React from "react";
import { category1, category2, category3 } from "../../../assets";
import "../../../css/ShoppingCSS/Styles.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <section className="categories py-4 container-fluid">
        <div className="row px-4 py-4">
          <div className="col-lg-4 col-12 col-md-6 cardBox mb-2">
            <div className="card border-0">
              <img src={category1} className="card-img-top" alt="Furniture" />
              <div className="card-body category">
                <h4 className="card-title text-center fw-bold text-white">
                  <Link
                    to={"/shop/listing"}
                    className="text-decoration-none text-white"
                  >
                    FURNITURE
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6 cardBox">
            <div className="card border-0">
              <img src={category2} className="card-img-top" alt="Lighting" />
              <div className="card-body category">
                <h4 className="card-title text-center fw-bold">
                  <Link
                    to={"/shop/listing"}
                    className="text-decoration-none text-white"
                  >
                    LIGHTING
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6 cardBox">
            <div className="card border-0">
              <img src={category3} className="card-img-top" alt="Accessories" />
              <div className="card-body category">
                <h4 className="card-title text-center fw-bold">
                  <Link
                    to={"/shop/listing"}
                    className="text-decoration-none text-white"
                  >
                    ACCESSORIES
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
