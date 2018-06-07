import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';


import UserAction from './../userAction';


export default class NavbarComp extends React.PureComponent {
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
        console.log('Nav Comp');
    }

    render(){
        return(
            <Navbar.Collapse>
                    <Link to={'/'} onClick= {() => this.setActive('') } className={(this.state.active === "") ? "active" : ""} >Home</Link>                            
                    <Link to={'/about'} onClick = {() => this.setActive('about') } className={(this.state.active === "about") ? "active" : ""} >About</Link>
                    <Link to={'/menu'} onClick = {() => this.setActive('menu') } className={(this.state.active === "menu") ? "active" : ""}>Menu</Link>
                    <Link to={'/cart'} onClick = {() => this.setActive('cart') } className={(this.state.active === "cart") ? "active" : ""}>Cart</Link>
                    
                    <UserAction loginModalState = { this.loginForm } />
            </Navbar.Collapse>
        );
    }
}