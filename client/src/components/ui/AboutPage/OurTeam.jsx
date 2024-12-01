import React from 'react';
import styles from "../../../css/ShoppingCSS/About.module.css";
import LuxuryReuse from './LuxuryReuse';
import {President,VicePresident} from '../../../assets';


function OurTeam() {
  return (
    <>
    <section className={`${styles.teamSection} container-fluid p-4`}>
    <div className={`${styles.title} text-center`}>
  OUR TEAM
  <h2 className='display-2 text-white'>Masterminds Behind The Luxury
  </h2>
  <section className={`${styles.luxuryReuse} row pt-4 pb-4 px-4 d-flex`}>
  <LuxuryReuse image={President} title="President" name="Kamran Hussain" description="The power of passion has made Kit & Kaboodle my top priority. One thing that kept me standing tall for leading Kit & Kaboodle is the desire to create a platform where designer products are accessible to everyone regardless of boundaries. Having worked with many businesses over the years, I have enjoyed and cherished every step forward, success, and achievement of Kit & Kaboodle. It gives immense satisfaction to me when I see our brand setting new standards while offering good designs and premium quality in the market and becoming the first choice for those who have a keen interest in interiors. My key to successful operations is to increase the number of happier customers, cutting down the costs of imported products through smart business strategies where we end up having more buyers than window shoppers. Providing excellent customer service to all our clients and bringing every international interior trend at the earliest is our goal."/>
  </section>
  <section className={`${styles.luxuryReuse} pt-4 pb-4 px-4 row  d-flex flex-row-reverse`}>
  <LuxuryReuse image={VicePresident} title="VicePresident" name="Julie Johnsen" description="I truly believe in surrounding yourself with beauty, as it makes a person happier and delighted in many ways. Everything in our product range is handpicked keeping that in mind. I have a burning desire for beautiful interiors and have extensively worked on designing homes and interior spaces all over the world. One thing I found common in all customers is that everyone wants to beautify the surroundings linking it with a comfortable living. With a passionate eye for design, whenever I have encountered beautiful products that can be part of our beautiful collection, undoubtedly, it makes me overjoyed. Designer names and price is secondary, it’s the feeling of the products, tacitly of the materials, a combination of classy and chic appearance and above all the functionality of the product that matters most to us."/>
  </section>
</div>
    </section>
      
    </>
  )
}

export default OurTeam
