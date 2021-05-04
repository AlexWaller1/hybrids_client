import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import HybridsContainer from './HybridsContainer'
import About from '../components/About'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={HybridsContainer} />

        </Switch>
    );
};

export default Router;