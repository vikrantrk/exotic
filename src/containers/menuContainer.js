import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../components/menu";
import { addToCart, addCount, removeCount } from "../actions/menu";

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    
  }

  addToCart(id, data) {
    this.props.addToCart(id, data);
  }

 

  render() {
    return (
      <Menu
        data={this.props}
        addToCart={this.addToCart}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('State Data:', state);
  return {
    allProducts: state.cart.productList,
    updatedState: state.cart.updatedState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, data) => dispatch(addToCart(id, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
