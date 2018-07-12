import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';


import Logo from './logo';
import NavbarComp from './navbar';

import './header.css';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.GoToPage = this.GoToPage.bind(this);
    }
    

    GoToPage(path) {
        this.props.properties.goToPage(path);
    }

    render(){
        return (
            <Navbar fluid>
                 <Logo />
                 <NavbarComp navProps={this.props} goTo={this.GoToPage}/>
             </Navbar>
          );
    }
        
}

