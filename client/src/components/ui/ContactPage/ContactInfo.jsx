import React from 'react';
import styles from "../../../css/ShoppingCSS/Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaPlay, FaClock } from 'react-icons/fa';

function ContactInfo() {
  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="row text-center text-white">
        {/* Email Address */}
        <div className="col-lg-3 col-md-6 mb-4 ">
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
              <FaEnvelope />
            </div>
            <h5>Email Address</h5>
            <p className='mb-5'>Customercare@FurnitureStudio.Com</p>
            <div className={styles.underline}></div>
          </div>
        </div>

        {/* Contact Number */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
              <FaPhoneAlt />
            </div>
            <h5>Contact Number</h5>
            <p className='mb-5'>+971-543070065</p>
            <div className={styles.underline}></div>
          </div>
        </div>

        {/* Social Media */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
              <FaPlay />
            </div>
            <h5>Social Media</h5>
            <p className='mb-5'>
              <FaFacebookF className="mx-2" />
              <FaInstagram />
            </p>
            <div className={styles.underline}></div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
              <FaClock />
            </div>
            <h5>Visit Us</h5>
            <p>10 Am To 10 Pm</p>
            <p className={`${styles.highlightText} mb-5`}>Monday - Sunday</p>
            <div className={styles.underline}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;