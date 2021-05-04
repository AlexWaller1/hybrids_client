import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import HybridsContainer from './HybridsContainer'
import About from '../components/About'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            
        </Switch>
    );
};

export default Router;