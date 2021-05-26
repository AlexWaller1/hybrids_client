import React from 'react';

import Router from './Router'

import Header from './Header'

import HybridsContainer from './HybridsContainer'
import NavLinks from './NavLinks';
import RobotsContainer from './RobotsContainer';
import MinimartsContainer from './MinimartsContainer';

const App = () => {
    return (
        <div>
          <Header />
          <NavLinks />
          <HybridsContainer />
          <RobotsContainer />
          <MinimartsContainer />
          <Router />
        </div>
    );
};

export default App;