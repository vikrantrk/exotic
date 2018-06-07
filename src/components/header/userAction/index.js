import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

export default class UserAction extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {'active': ''};

        this.loginForm = this.loginForm.bind(this);
    }

    setActive(menu){
        this.setState({'active': menu});
    }

    loginForm(){
        this.props.loginModalState(true);
        console.log('login Comp');
    }

    render(){
        return(
            <span>
                <a  className="pull-right loginBtn" onClick={this.loginForm} >Log In</a>
                <a to={'/cart'} className="pull-right loginBtn">Sign Up</a>
            </span>
        );
    }
}