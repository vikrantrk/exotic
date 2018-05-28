import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './home';
import About from './about';
import Menu from './menu';

const RouterModule = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/menu' component={Menu}/>
        </Switch>
    );
}

export default RouterModule;