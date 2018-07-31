import React, { Component } from "react";
import "./menu.css";
import theme from "../../theme";
import Grid from "@material-ui/core/Grid";
import AllProducts from "./allproducts";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.addQty = this.addQty.bind(this);
    this.removeQty = this.removeQty.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart (id) {
    this.props.addToCart(id);
  };

  addQty(id) {
    this.props.addCount(id, this.props.data.allProducts);
  }

  removeQty(id) {
    this.props.removeCount(id, this.props.data.allProducts);
  }

  getProducts() {
    return this.props.data.allProducts.map((product, index) => {
      return (
        <AllProducts
          data={product}
          cartData={this.props.data.cartList}
          key={index}
          index={index}
          addQty={this.addQty}
          removeQty={this.removeQty}
          updatedState={this.props.data.updatedState}
          addToCart={this.addToCart}
        />
      );
    });
  }

  render() {
    return (
      <div className="parentContainer">
        <Grid container spacing={24} style={theme.palette.parentContainer}>
          {this.getProducts()}
        </Grid>
      </div>
    );
  }
}
