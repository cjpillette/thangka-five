import React from 'react';
import Radium from 'radium';

import thangkaLogo from 'assets/icons/thangkaLogo.svg';

const logo = (props) => {

  return (
    <div 
      style={
          {
          position: 'absolute',
          padding: '8px',
          height: '100%',
          boxSizing: 'border-box',
          borderRadius: '5px',
          height: props.height,
          top: props.top,
          left: props.left
        }}>
      <img src={thangkaLogo} alt="Thang-ka Logo" style={{height: '100%'}}/>
  </div>
  )
}

export default Radium(logo);