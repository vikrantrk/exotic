import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

export default class Logo extends React.PureComponent {

    render(){
        return(
            <Navbar.Header>
                <Navbar.Brand>
                <Link to={'/'}>React-Bootstrap</Link>
                </Navbar.Brand>
            </Navbar.Header>
        );
    }
}