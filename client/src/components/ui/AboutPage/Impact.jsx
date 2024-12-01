import React from "react";
import { IoMdClock } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import styles from "../../../css/ShoppingCSS/About.module.css";

export default function Impact() {
  return (
    <>
      <div className={`${styles.impactSection} container-fluid`}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-3 py-3 text-center">
            <span className={`${styles.impact} display-3`}>
              <IoMdClock />
            </span>

            <h2 className="text-center text-white py-3 fw-bolder">2017</h2>
            <p className="text-center  text-white">Year Founded</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-3 py-3 text-center">
            <span className={`${styles.impact} display-3`}>
              <TiGroup />
            </span>

            <h2 className="text-center text-white py-3 fw-bolder">100%</h2>
            <p className="text-center text-white">Customer Satisfaction</p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-3 py-3 text-center">
            <span className={`${styles.impact} display-3`}>
              <IoIosSend />
            </span>

            <h2 className="text-center  text-white py-3 fw-bolder">
              Contact Us
            </h2>
            <p className="text-center  text-white">We are here to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
