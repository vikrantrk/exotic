import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../components/menu";
import { addToCart, addCount, removeCount } from "../actions/menu";

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    
  }

  addToCart(id) {
    this.props.addToCart(id);
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
  return {
    allProducts: state.cart.allProducts,
    cartList: state.cart.cartList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
