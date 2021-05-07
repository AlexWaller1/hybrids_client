import React from 'react';

import Router from './Router'

import Header from './Header'

import HybridsContainer from './HybridsContainer'
import NavLinks from './NavLinks';

const App = () => {
    return (
        <div>
          <Header />
          <NavLinks />
          <HybridsContainer />
          <Router />
        </div>
    );
};

export default App;