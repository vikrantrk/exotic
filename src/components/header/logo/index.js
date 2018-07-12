import React from 'react';
import {Navbar} from 'react-bootstrap';

export default class Logo extends React.PureComponent {

    render(){
        return(
            <Navbar.Header>
                <Navbar.Brand>
                <div>React-Bootstrap</div>
                </Navbar.Brand>
            </Navbar.Header>
        );
    }
}