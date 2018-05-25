import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './home';
import About from './about';

const RouterModule = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
        </Switch>
    );
}

export default RouterModule;