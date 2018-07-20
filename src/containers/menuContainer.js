import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../components/menu";
import { addToCart, addCount, removeCount } from "../actions/menu";

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.addCount = this.addCount.bind(this);
    this.removeCount = this.removeCount.bind(this);
  }

  addToCart(id, data) {
    this.props.addToCart(id, data);
  }

  addCount(id, data) {
    this.props.addCount(id, data);
  }

  removeCount(id, data) {
    this.props.removeCount(id, data);
  }

  render() {
    return (
      <Menu
        data={this.props}
        addToCart={this.addToCart}
        addCount={this.addCount}
        removeCount={this.removeCount}
        updatedState={this.props.updatedState}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allProducts: state.menu.productList,
    updatedState: state.menu.updatedState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, data) => dispatch(addToCart(id, data)),
    addCount: (id, data) => dispatch(addCount(id, data)),
    removeCount: (id, data) => dispatch(removeCount(id, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
