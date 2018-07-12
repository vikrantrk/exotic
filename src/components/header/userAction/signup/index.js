import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Signup extends React.PureComponent {
    constructor(props){
        super(props);

        this.setSignupVisible = this.setSignupVisible.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setSignupVisible(){
        this.props.props.setSignupModalVisibility(true);
     }

     handleClose(){
        this.props.props.setSignupModalVisibility(false);
     }


    render(){
        return(
            <span>
                <Button
                    variant="contained"
                    color="primary"
                    className="userActionBtn pull-right"
                    onClick={this.setSignupVisible}
                >
                    Sign up
                </Button>
                <Dialog
                    open={this.props.props.isSignupModalVisible}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe 121212</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
            </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
            </Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}