import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const goToTopIcon = <i className="material-icons">navigation</i>


const goToTop = () => (
        <BottomNavigation>
          <BottomNavigationItem
            icon={goToTopIcon}
            onClick={() => window.scrollTo(0,0)}
          />
        </BottomNavigation>
    );

export default goToTop;