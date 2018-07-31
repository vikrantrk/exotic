import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/cart";
import { getCartListData, addQty,removeQty, deleteItem } from "./../actions/cart";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.getCartListData = this.getCartListData.bind(this);
    this.addQty = this.addQty.bind(this);
    this.removeQty = this.removeQty.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addQty(id) {
    this.props.addQty(id);
  }

  removeQty(id) {
    this.props.removeQty(id);
  }

  getCartListData() {
    this.props.getCartListData(this.props.cartList, this.props.productList);    
  }

  deleteItem(index) {
    this.props.deleteItem(index);
  }

  render() {
    return (
      <Cart
        cartData={this.props.cartList}
        productList={this.props.allProducts}
        addQty={this.addQty}
        removeQty={this.removeQty}
        updatedState={this.props.updatedState}
        data = {this.props}
        deleteItem = {this.deleteItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.cart.cartList,
    allProducts: state.cart.allProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartListData: (cartData, allProducts) =>
      dispatch(
        getCartListData({ cartList: cartData, productList: allProducts })
      ),
      addQty: (id) => dispatch(addQty(id)),
      removeQty: (id) => dispatch(removeQty(id)),
      deleteItem: (index) => dispatch(deleteItem({index}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
