import React from 'react';
import {Navbar} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import UserAction from '../userAction';


//import UserAction from './../userAction';


export default class NavbarComp extends React.PureComponent {
    constructor(props){
        super(props);
        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.goTo(path);
    }

    render(){
        return(
            <Navbar.Collapse>
                    <Button onClick={() =>this.goTo('/')}>Home</Button>                            
                    <Button onClick={() =>this.goTo('/about')}>About</Button>
                    <Button onClick={() =>this.goTo('/menu')}>Menu</Button>
                    <Button onClick={() =>this.goTo('/cart')}>Cart</Button>
                    <UserAction props={this.props.navProps.properties}/>
            </Navbar.Collapse>
        );
    }
}