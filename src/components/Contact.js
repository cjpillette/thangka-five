import React from 'react';

import Logo from 'components/ui/Logo';
import tkMountain from 'assets/images/tkMountain.png';
import tkLocationFine from 'assets/icons/tkLocationFine.svg';
import tkLocationFrance from 'assets/icons/tkLocationFrance.svg';
import soaring from 'assets/icons/soaring.svg';
import facebook from 'assets/icons/facebook.svg';
import youtube from 'assets/icons/youtube.svg';
import takeOff from 'assets/icons/take-of.svg';

const contact = () => {
  const contactStyle = {
    position: 'relative'
  }
  
  const mountainStyle = {
      width: '100%',
      height: '100%'
  }

  return(
    <div id='contact'>
    <h1>Contact</h1>
    <section style={contactStyle}>
        <h2>Ecole de parapente</h2>
        <h3>Drils</h3>
        <h3>15300 Dienne</h3>
        <h3>thangka@email.com</h3>
        <h3>06 62 18 82 60</h3>
        <Logo height='120px' top='60%' left='30%'/>
        <img src={tkMountain} style={mountainStyle} alt='Montagne du Cantal'/>
        <img src={tkLocationFine} alt="Drils sur la carte regionale" />
        <img src={tkLocationFrance} alt="Drils sur la carte de France" />
        <img src={soaring} alt="Soaring above the mountains of Cantal" />
        <img src={youtube} alt="Lien youtube" />
        <img src={facebook} alt="Lien facebook" />
        <img src={takeOff} alt="Demarrage en parapente" />
    </section>
    </div>
  )  
};

export default contact;