import React from 'react';

import ParaBlanc from 'assets/icons/ParaBlanc.svg';
import MountainBackground from 'assets/images/MountainBackground.png';
import SchoolBackground from 'assets/images/SchoolBackground.png';

import TrainingsList from 'components/school/TrainingsList';
import Inscription from 'components/school/Inscription';

const school = () => {
  const schoolStyle = {
    backgroundImage: `url(${SchoolBackground}), linear-gradient(to right, #636E5E, #2B2E26)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
  const trainingListStyle = {
    height: '800px',
    width: '70%',
    border: '1px solid black',
    margin: 'auto'
  }

  return (
    <div id='stage'>
    <div style={schoolStyle}>
      <header>
          <h1>Les stages</h1>
          <p>Nous vous offrons des stages de 3 a 10 jours ainsi que des journees simples pour vous initier et/ou vous perfectionner.
          Des sejours hors-Cantal sont egalement disponibles ici…</p>
      </header>
      <section style={trainingListStyle}>
          <TrainingsList />
      </section>
    </div>
    <Inscription />
    <img src={MountainBackground} alt='Paysage de montagne' style={{ width: '100%'}}/>
  </div>
  )
}

export default school;