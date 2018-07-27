import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/cart";
import { getCartListData, addCount, removeCount, deleteItem } from "./../actions/cart";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.getCartListData = this.getCartListData.bind(this);
    this.addCount = this.addCount.bind(this);
    this.removeCount = this.removeCount.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addCount(id, data) {
    this.props.addCount(id, data);
  }

  removeCount(id, data) {
    this.props.removeCount(id, data);
  }

  getCartListData() {
    this.props.getCartListData(this.props.cartList, this.props.productList);    
  }

  deleteItem(index,id, data) {
    this.props.deleteItem(index,id, data);
  }

  render() {
    console.log('cc', this.props)
    return (
      <Cart
        cartList={this.props.cartList}
        productList={this.props.productList}
        getCartListData={this.getCartListData}
        cartListItems={this.props.cartDataItems}
        addQty={this.addCount}
        removeQty={this.removeCount}
        updatedState={this.props.updatedState}
        data = {this.props}
        deleteItem = {this.deleteItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.menu.cartList,
    productList: state.cart.productList,
    cartDataItems: state.cart.cartDataItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartListData: (cartData, allProducts) =>
      dispatch(
        getCartListData({ cartList: cartData, productList: allProducts })
      ),
    addCount: (id, data) => dispatch(addCount(id, data)),
    removeCount: (id, data) => dispatch(removeCount(id, data)),
    deleteItem: (index,id, data) => dispatch(deleteItem({index,id, data}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
