import React from 'react';
import Signup from './signup';
import Login from './login';

export default class UserAction extends React.PureComponent {
    constructor(props){
        super(props);

        this.loginForm = this.loginForm.bind(this);
    }

    setActive(menu){
        this.setState({'active': menu});
    }

    loginForm(){
        this.props.loginModalState(true);
    }

    
    render(){
        return(
            <span>
                <Login props={this.props.props}/>
                <Signup props={this.props.props}/>
            </span>
        );
    }
}