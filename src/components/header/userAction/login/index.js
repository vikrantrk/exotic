import React from "react";
import Button from "@material-ui/core/Button";
import LoginForm from './loginForm';

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLoginModalVisibility = this.setLoginModalVisibility.bind(this);
  }

  handleChange() {}
  handleUpdate() {}

  handleClose() {
    this.props.props.setLoginModalVisibility(false);
  }

  setLoginModalVisibility() {
    this.props.props.setLoginModalVisibility(true);
  }

  render() {
    return (
      <span>
        <Button
          variant="contained"
          color="primary"
          className="userActionBtn pull-right"
          onClick={this.setLoginModalVisibility}
        >
          Log in
        </Button>
        <LoginForm formProperties = {this.props.props} handleClose = {this.handleClose}  />
      </span>
    );
  }
}
