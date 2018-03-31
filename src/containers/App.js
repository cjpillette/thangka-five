import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'containers/App.css';
import Aux from 'hoc/Aux';

import Homepage from 'containers/Homepage';
import Calender from 'containers/Calender';
import Weather from 'components/Weather';
import MainNav from 'components/nav/MainNav'
import SideNav from 'components/nav/SideNav';
import GoToTop from 'components/nav/GoToTop';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Aux>
            <MainNav />
            <Route path="/" exact component={Homepage} />
            <Route path="/meteo" exact component={Weather} />
            <Route path="/calendrier" exact component={Calender} />
            <SideNav />
            <GoToTop />
          </Aux>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
