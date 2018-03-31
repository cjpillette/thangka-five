import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';

import meteo from 'assets/icons/icon-meteo.svg';
import carte from 'assets/icons/icon-carte.svg';
import auvergnat from 'assets/icons/auvergnat.svg';
import calendrier from 'assets/icons/calendrier.svg';

const sideNav = () => {
  const sideNavStyle = {
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  const sideLogoStyle = {
    border: '1px solid black',
    cursor: 'pointer',
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '40px',
    height: '40px',
    padding: '5px',
    ':hover': {
      transform: 'scale(1.1)',
      backgroundColor: 'rgba(255,255,255,0.7)'
    }
  }

  return (
    <div style={sideNavStyle}>
      <nav>
        <ul>
          <li>
            <Link to="/meteo">
              <Tooltip content="Meteo" direction="left">
                <img src={meteo} alt="icon meteo" style={sideLogoStyle}/>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/sites">
              <Tooltip content="Sites de vol" direction="left">
                <img src={carte} alt="icon carte" style={sideLogoStyle} />
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/region">
              <Tooltip content="Dormir et Manger" direction="left">
                <img src={auvergnat} alt="icon auvergnat" style={sideLogoStyle}/>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="calendrier">
              <Tooltip content="Calendrier" direction="left">
                <img src={calendrier} alt="icon calendrier" style={sideLogoStyle}/>
              </Tooltip>
            </Link>
          </li>
        </ul>
        </nav>
      </div>
  )
};

export default sideNav;