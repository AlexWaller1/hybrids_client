import React from 'react';

import Router from './Router'

import Header from './Header'

import HybridsContainer from './HybridsContainer'

const App = () => {
    return (
        <div>
          <Header />
          <HybridsContainer />
          <Router />
        </div>
    );
};

export default App;