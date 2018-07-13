import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

export default class AfterLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
        anchorEl: null,
      };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
      this.props.props.setUserLogout({loggedInStatus: false, loggedInData:''});
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <span>
        <Button
          aria-owns={anchorEl ? "fade-menu" : null}
          aria-haspopup="true"
          className="userActionBtn pull-right"
          onClick={this.handleClick}
        >
         Hello, {this.props.props.loggedInUser.firstname}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </Menu>
      </span>
    );
  }
}
