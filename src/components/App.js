import React from 'react';

import Router from './Router'

import Header from './Header'

import HybridsContainer from './HybridsContainer'
import NavLinks from './NavLinks';
import RobotsContainer from './RobotsContainer';

const App = () => {
    return (
        <div>
          <Header />
          <NavLinks />
          <HybridsContainer />
          <RobotsContainer />
          <Router />
        </div>
    );
};

export default App;