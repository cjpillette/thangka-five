import React from 'react';

const profile = (props) => {
  const profileStyle = {
    maxWidth: '200px',
    margin: '0 30px',
    overflow: 'hidden'
  }

  return (
    <div style={profileStyle}>
      <img 
        src={require('assets/people/' + props.name + '.png')} 
        alt="profile"
        style={{height: '160px', width: '160px'}}/>
      <h2>{props.name}</h2>
      <p>{props.about}</p>
    </div>
  )
};

export default profile;