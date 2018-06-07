import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Header from './header';

import RouterModule from './routerModule';

const AppMain = () => {  
        return (
            <Router>
                <div className="AAA">
                    <Header />

                    <div className="text">
                    <RouterModule />
                    </div>
                </div>
            </Router>
        );
}

export default AppMain;