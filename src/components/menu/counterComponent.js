import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
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
    this.props.addQty()
}
decrement(){
  if(this.props.count > 1)
    this.props.removeQty();
}

  render() {
    return (
      <span className="pull-right" >
       
      <Button variant="fab" color="primary" aria-label="Add"  onClick={this.decrement} className="counterBtn">
        <RemoveIcon />
      </Button>
        
      <span className="counter">
      {this.props.count}
        </span>
       
      <Button variant="fab" color="primary" aria-label="Add"  onClick={this.increment} className="counterBtn">
        <AddIcon />
      </Button>
        
      </span>
    );
  }
}
