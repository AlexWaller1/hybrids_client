import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import HybridsList from './HybridsList'
import RobotsList from './RobotsList'
import SingleHybrid from './SingleHybrid'
import SingleRobot from './SingleRobot'
import SingleMinimart from './SingleMinimart'
import SingleSkatepark from './SingleSkatepark'
import SingleMotorhome from './SingleMotorhome'
import SingleSkateboarder from './SingleSkateboarder'
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
            <Route exact path='/robots/:robotId' component={SingleRobot} />
            <Route exact path='/minimarts' component={MinimartsList} />
            <Route exact path='/minimarts/:minimartId' component={SingleMinimart} />
            <Route exact path='/skateparks' component={SkateparksList} />
            <Route exact path='/skateparks/:skateparkId' component={SingleSkatepark} />
            <Route exact path='/cities' component={CitiesList} />
            <Route exact path='/motorhomes' component={MotorhomesList} />
            <Route exact path='/motorhomes/:motorhomeId' component={SingleMotorhome} />
            <Route exact path='/skateboarders' component={SkateboardersList} />
            <Route exact path='/skateboarders/:skateboarderId' component={SingleSkateboarder} />
           
        </Switch>
    );
};

export default Router;

// where we assign urls to our components
// switch ensures that the first route that matches will get rendered.