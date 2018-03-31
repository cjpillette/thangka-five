import React from 'react';

import ButtonCard from 'components/ui/ButtonCard';
import tkRover from 'assets/images/tkRover.png';

const shop = () => {
  const dividerStyle = {
        backgroundImage: `url(${tkRover})`,
        height: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
  }
  return (
    <div id='boutique'>
    <h1>La boutique</h1>
    <div style={{ display: 'flex'}}>
      <ButtonCard height="100px" width="100px" icon="voile" label="voile"/>
      <ButtonCard height="100px" width="100px" icon="minivoile" label="mini-voile"/>
      <ButtonCard height="100px" width="100px" icon="secours" label="parachute de secours"/>
      <ButtonCard height="100px" width="100px" icon="sellette" label="sellette"/>
    </div>
    <div style={dividerStyle} />
  </div>
  )
}

export default shop;