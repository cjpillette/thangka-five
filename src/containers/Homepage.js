import React, { Component } from 'react';

import Aux from 'hoc/Aux';
import Banner from 'components/Banner';
import Tandem from 'components/Tandem';
import School from 'components/school/School';
import Team from 'components/team/Team';
import Shop from 'components/Shop';
import Contact from 'components/Contact';

class Homepage extends Component {
  render() {
    return (
      <Aux>
        <Banner />
        <Tandem />
        <School />
        <Team />
        <Shop />
        <Contact />
      </Aux>
    )
  }
}

export default Homepage;