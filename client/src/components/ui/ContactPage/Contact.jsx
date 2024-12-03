import React from 'react'
import  Banner from '../AboutPage/Banner';
import { ContactBanner } from '../../../assets'
import ContactInfo from './ContactInfo'
import styles from '../../../css/ShoppingCSS/Contact.module.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className={`contactPage ${styles.contactPage}`}>
      <Banner image={ContactBanner} title="Contact Us" />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default Contact