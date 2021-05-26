import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import HybridsList from './HybridsList'
import RobotsList from './RobotsList'
import MinimartsList from './MinimartsList'
import About from '../components/About'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/hybrids' component={HybridsList} />
            <Route exact path='/robots' component={RobotsList} />
            <Route exact path='/minimarts' component={MinimartsList} />

        </Switch>
    );
};

export default Router;

// where we assign urls to our components
// switch ensures that the first route that matches will get rendered.