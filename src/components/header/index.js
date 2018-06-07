import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Logo from './logo';
import NavbarComp from './navbar';
import Login from './login';

import './header.css';
import RouterModule from '../routerModule';

export default class Header extends Component{
    constructor(props){
        super(props);

        this.loginForm = this.loginForm.bind(this);
        this.closeLoginForm = this.closeLoginForm.bind(this);
        
        this.state = {
            showLogin: false,
            showSignup: false
          };
    }

    loginForm(){
        this.setState({showLogin: true});
    }

    closeLoginForm(){
        this.setState({showLogin: false});
    }

    render(){
        return (
            <Navbar fluid>
                 <Logo />
                 <NavbarComp loginModalState = { this.loginForm} />
                 <Login visibility = {this.state.showLogin} onHide = {this.closeLoginForm} />
             </Navbar>
          );
    }
        
}

