import React from 'react';

import Aux from 'hoc/Aux';
import Staff from 'components/team/Staff';
import tkOrigin from 'assets/icons/tkOrigin.svg';
import tkFocusLeft from 'assets/icons/tkFocusLeft.svg';
import tkFocusRight from 'assets/icons/tkFocusRight.svg';
import tkDivider from 'assets/images/divider4.png';

const staffprof = [
    {name: 'Jo', about: 'Directeur technique et fondateur de Thang-ka en 1998. Moniteur diplômé BE parapente. Moniteur Cage et Kite, instructeur ULM pendulaire et paramoteur. Pratique le parapente depuis 1990. Doué, passionné et charismatique, le créateur de l’esprit Thang-ka... Toujours là pour rigoler mais très sérieux quand nécessaire. Parle le français, le néerlandais et l’anglais couramment.'},
    {name: 'Vinch', about: 'Aka \'Wènch\'. Moniteur diplômé BE parapente. Responsable matériel de vol. Parle le français, le néerlandais et l’anglais. Enthousiaste et sans fatigue, toujours prêt à donner un coup de main. Passionné par l’aventure et par tout ce qui vole !'},
    {name: 'Dede', about: 'Aka \'Ded\' ou s’il faut vraiment : Didier. Monsieur je fais tout. Responsable assistants. Infatigable et toujours avec le sourire'},
    {name: 'Romain', about: 'Moniteur diplomé BE parapente. Responsable café. Parmi les plus anciens de l’équipe. No stress, que du bonheur '},
    {name: 'Elsje', about: 'Aka \'Patronneke\'. Responsable \'rigologie et animation\'. Responsable "vente et communication". Parle le français, le néerlandais et l’anglais. La petite géante derrière les coulisses... '},
    {name: 'Pafke', about: 'Nouvelle mascotte depuis l’été 2014. Responsable \'anti-souris\'. Mignon et malin. Adore les câlins'},
]

const team = () => {
  const staffStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }

  return (
    <div id="equipe">
    <h1>L'equipe</h1>
      <h2>L'origine de Thang-ka</h2>
        <img src={tkOrigin}  alt="l\'origine de Thang-ka"/>
      <h2>L'escadron</h2>
        <p>A nouveau cette année, une équipe formidable est à votre disposition pour l’encadrement, la formation et pour vous conseiller par rapport au matériel de vol libre (essai, achat...). Il s’agit d’une équipe de moniteurs professionnels et passionnés venant de tous les coins de la France et de la Belgique, réunis pour partager avec vous leurs compétences et leur bonne humeur.</p>
        <div style={staffStyle}>
        {staffprof.map(staff => (
          <Aux key={staff.name}>
            <Staff name={staff.name} about={staff.about} />
          </Aux>
        ))}
        </div>
      <h2>Notre focus</h2>
      <img src={tkFocusLeft} alt="Notre focus" />
      <img src={tkFocusRight} alt="Notre focus" />
      <img src={tkDivider} alt="Paysage du Cantal" />
  </div>
  )
}

export default team;