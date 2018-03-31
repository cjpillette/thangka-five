import React from 'react';

import tandemDrawing from 'assets/icons/tandem-drawing.svg';

const tandem = () => {
  const tandemHeaderStyle = {
    display: 'flex'
  }

  const tandemHeaderTextStyle ={
    maxWidth: '40%'
  }

  const mainQuestionStyle = {
    width: 'calc(100% - 2em)',
    margin: '1em',
    boxSizing: 'border-box',
    border: '1px solid black',
    borderRadius: '10px',
    height: '100px'
  }

  const otherQuestionStyle = {
    width: 'calc(50% - 2em)',
    margin: '1em',
    border: '1px solid black',
    borderRadius: '10px',
    height: '100px',
    boxSizing: 'border-box'
  }

  const tandemProgramStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    maxWidth: '70%',
    margin: 'auto'
  }
  return(
    <div id="tandem">
      <header style={tandemHeaderStyle}>
          <h1>Bapteme</h1>
          <img src={tandemDrawing} alt="dessin d'un tandem" />
          <p style={tandemHeaderTextStyle}>Pour ceux qui rêvent de voler comme un oiseau, sans difficultés, de flotter en l’air sans moteur et sans formation quelconque, c’est le moment de se laisser emporter tranquillement par son pilote personnel qui vous fera découvrir les Monts du Cantal dans toute leur splendeur.</p>
      </header>
      <div style={tandemProgramStyle}>
          <div style={mainQuestionStyle}>Le deroulement</div>
          <div style={otherQuestionStyle}>Pour qui?</div>
          <div style={otherQuestionStyle}>Quand?</div>
          <div style={otherQuestionStyle}>Ou?</div>
          <div style={otherQuestionStyle}>Combien?</div>
      </div>
      </div>
  )
}

export default tandem;