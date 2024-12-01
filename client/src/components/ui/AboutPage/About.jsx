import React from 'react';
import { aboutBanner } from '../../../assets';
import Banner from './Banner';
import LuxuryAbout from './luxuryAbout';
import OurTeam from './OurTeam';
import OurMission from './OurMission';
import Impact from './Impact';

function About() {
  return (
    <>
    <Banner image={aboutBanner} title="About Us"/>
 <LuxuryAbout/>
 <OurMission/>
 <OurTeam/>
 <Impact/>
      
    </>
  )
}

export default About
