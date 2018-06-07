import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './home';
import About from './about';
import Menu from './menu';
import Cart from './cart';

const RouterModule = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/menu' component={Menu}/>
            <Route exact path='/cart' component={Cart}/>
        </Switch>
    );
}

export default RouterModule;