import React from 'react';

const buttonCard = (props) => {
  const buttonCardStyle = {
    margin: '10px',
    padding: '10px',
    width: '200px',
    border: '1px solid black',
    boxShadow: 'inset 0 0 10px #000000'
  }
  return (
    <div style={buttonCardStyle}>
    <label>{props.label}</label>
      <img 
        src={`${require('assets/icons/' + props.icon + '.svg')}`} alt="icon parapente"
        style={{ height: props.height, width: props.width }}/>
    </div>
  )
};

export default buttonCard;