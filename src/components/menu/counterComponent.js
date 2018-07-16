import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import theme from "../../theme";
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import './menu.css';

export default class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    let count = this.state.count
    this.setState({'count': ++count});
}
decrement(){
    let count = this.state.count;
    if(this.state.count > 1)
        this.setState({'count': --count});
    else
        this.setState({'count': 0});
}

  render() {
    return (
      <span className="pull-right" >
        <Icon color="primary" onClick={this.decrement}>
        remove_circle
      </Icon>
        
      <span className="counter">
      {this.state.count}
        </span>
        <Icon color="primary" onClick={this.increment} >
        add_circle
      </Icon>
        
      </span>
    );
  }
}
