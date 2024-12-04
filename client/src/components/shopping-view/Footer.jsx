import React from "react";
import { logo } from "../../assets";
import "../../css/ShoppingCSS/Styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row footerItems">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-brand"><img src={logo} alt="Logo" />
              <p>Furniture <br /> Studio</p></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footerBox">
                <ul> 
                    <h4>OUR RANGE</h4>
                  <li>
                    <Link to="/" className="li">FURNITURE</Link>
                  </li>
                  <li>
                    <Link to="/" className="li">LIGHTENING</Link>
                  </li>
                  <li>
                    <Link to="/" className="li">CURTAINS</Link>
                  </li>
                  <li>
                    <Link to="/" className="li">CHAIRS</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footerBox">
                <ul>
                <h4>OUR COMPANY</h4>

                  <li>
                    <Link to="/projects" className="li">HOME</Link>
                  </li>
                  <li>
                    <Link to="/events" className="li">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="li">CONTACT US</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footerBox">
                <ul>
                <h4>OUR LOCATIONS</h4>

                  <li>DUBAI</li>
                  <li>EUROPE</li>
                  <li>PAKISTAN</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom container-fluid pt-3">
            <p className="d-flex justify-content-center px-1 pt-2 justify-content-lg-end">Copyright&copy;2024 Furniture Studio.All rights are reserved.</p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}
