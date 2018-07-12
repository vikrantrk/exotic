import React, { Component } from 'react';

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { Field, FieldArray, reduxForm } from "redux-form";

import "./login.css";
import { validateUser } from './../../../../actions/header';

const getFormValues = (props, e) =>{
    let userLoginDetails = {
        'username': props.formProperties.formData.LoginForm.values.username,
        'password': props.formProperties.formData.LoginForm.values.password
    };
    
    props.formProperties.validateUser(userLoginDetails);
    e.preventDefault();

}

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom,
    type,
    fullWidth
  }) => (
    <TextField
      hinttext={label}
      floatinglabeltext={label}
      {...input}
      {...custom}
      type = {type}
      fullWidth = {fullWidth}
      label = {label}
    />
  );

const LoginForm = (props) =>{
    const { handleSubmit, pristine, reset, submitting } = props;
return(
    
    <Dialog
          open={props.formProperties.isLoginModalVisible}
          onClose={props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className="formHeading" id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
          <form  onSubmit={(event) => getFormValues(props, event)}>
            <div className="">
            <Field
          name="username"
          component={renderTextField}
          label="Username"
          fullWidth={true}
          className="username"
        />
        <Field
          name="password"
          component={renderTextField}
          label="password"
          type="password"
          fullWidth={true}
          className="password"
        />
                
                <Button type="submit" variant="contained" color="primary" className="submitBtn" fullWidth>
                  LOG IN
                </Button>
              </div>
              </form>
          </DialogContent>
          
        </Dialog>
        );
}

export default reduxForm({
    form: "LoginForm"
  })(LoginForm);

