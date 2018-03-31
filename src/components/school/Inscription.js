import React from 'react';

import ParaBlanc from 'assets/icons/ParaBlanc.svg';

const inscriptionstage = [
  { step: 'Cliquez sur le calendrier et selectionez votre stage', icon: 'calendrier'},
  { step: 'Versez les arrhes', icon: 'euros'},
  { step: 'Certificat medical a faire remplir par votre docteur avant le debut de stageLicence', icon: 'medical'},
  { step: 'Remplissez le formulaire de licence ci-dessous et completez les frais', icon: 'licence'},
]

const inscription = () => {
  const stepIconStyle = {
    backgroundColor: 'silver',
    display: 'inline-block',
    height: 0,
    paddingBottom: '70%',
    width: '70%',
    borderRadius: '70%',
    border: '1px solid black'
  }
  return (
    <section>
    <p style={{textTransform: 'uppercase', textAlign: 'center'}}>Je veux m'inscrire</p>
      <ul style={{ display: 'flex', alignItems: 'flex-end'}}>
      {inscriptionstage.map( step => (
        <li style={{width: `calc(100% / ${inscriptionstage.length} - 40px)`}} key={step.step}>
          <p>{step.step}</p>
          <div style={stepIconStyle}></div>
        </li>
      ))}
        <li>
          <img src={ParaBlanc} alt="Parapente qui s'envoile" />
        </li>
      </ul>
    </section>
  )
};

export default inscription;