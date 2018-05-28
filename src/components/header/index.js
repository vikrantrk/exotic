import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import RouterModule from '../routerModule';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#home">React-Bootstrap</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Collapse>
                                <Link to={'/'}>Home</Link>
                            
                                <Link to={'/about'}>About</Link>
                                <Link to={'/menu'}>Menu</Link>
                                </Navbar.Collapse>
                    </Navbar>

                    <div className="text">
                    <RouterModule />
                    </div>
                </div>
            </Router>
        );
    }
}