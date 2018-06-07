import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'react-bootstrap';

export default class Login extends React.PureComponent {
    constructor(props){
        super(props);

        this.handleClose = this.handleClose.bind(this);

    }

    handleClose(){
       this.props.onHide(true);
    }

    render(){
        console.log('PROPS:', this.props);
        return(
            <Modal show={this.props.visibility} onHide={this.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4>Overflowing text to show scroll behavior</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
            
            </Modal>
        );
    }
}