import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

import Logo from 'components/ui/Logo';

const mainNav = () => {
  const navStyle = {
    display: 'flex',
    height: '80px',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  const itemNavStyle = {
    textDecoration: 'none',
    padding: '0 10px',
    color: 'black'
  }

  return(
    <div>
    <nav>
      <ul style={navStyle}>
        <li>
          <Link to={{pathname: '/'}}>
            <Logo height="80px" left="0" top="0" />
          </Link>
        </li>
        <li><Link to={{pathname: '/', hash: '#bapteme'}} style={itemNavStyle}>Bapteme</Link></li>
        <li><Link to={{pathname: '/', hash: '#stages'}} style={itemNavStyle}>Stages</Link></li>
        <li><Link to={{pathname: '/', hash: '#equipe'}} style={itemNavStyle}>L'equipe</Link></li>
        <li><Link to={{pathname: '/', hash: '#boutique'}} style={itemNavStyle}>La Boutique</Link></li>
        <li><Link to={{pathname: '/', hash: '#contact'}} style={itemNavStyle}>Contact</Link></li>      
      </ul>
      </nav>
    </div>
  )
};

export default Radium(mainNav);