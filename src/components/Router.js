import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import HybridsList from './HybridsList'
import RobotsList from './RobotsList'
import SingleHybrid from './SingleHybrid'
import MinimartsList from './MinimartsList'
import SkateparksList from './SkateparksList'
import CitiesList from './CitiesList'
import MotorhomesList from './MotorhomesList'
import SkateboardersList from './SkateboardersList'
import About from '../components/About'


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/hybrids' component={HybridsList} />
            <Route exact path='/hybrids/:hybridId' component={SingleHybrid} />
            <Route exact path='/robots' component={RobotsList} />
            <Route exact path='/minimarts' component={MinimartsList} />
            <Route exact path='/skateparks' component={SkateparksList} />
            <Route exact path='/cities' component={CitiesList} />
            <Route exact path='/motorhomes' component={MotorhomesList} />
            <Route exact path='/skateboarders' component={SkateboardersList} />
           
        </Switch>
    );
};

export default Router;

// where we assign urls to our components
// switch ensures that the first route that matches will get rendered.