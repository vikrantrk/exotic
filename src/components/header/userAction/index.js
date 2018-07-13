import React from 'react';
import Signup from './signup';
import Login from './login';
import AfterLogin from "./afterlogin";
//import { isLoggedIn } from './../../../services/localStorage.service';

export default class UserAction extends React.PureComponent {
    constructor(props){
        super(props);
        this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin(){
        if(!this.props.props.isLoggedIn){
            return <Login props={this.props.props} />;
        }
        else{
            return <AfterLogin props={this.props.props} />;
        }
    }

    
    render(){
        return(
            <span>
                { this.checkLogin() }
                <Signup props={this.props.props}/>
            </span>
        );
    }
}