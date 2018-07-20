import React, { Component } from "react";
import { setCartValue } from "../../effects/localStorage.service";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./menu.css";
import theme from "../../theme";
import CounterComponent from "./counterComponent";
import Grid from "@material-ui/core/Grid";
import AllProducts from "./allproducts";
import { addToCart } from "./../../actions/menu";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.addQty = this.addQty.bind(this);
    this.removeQty = this.removeQty.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart (id) {
    this.props.addToCart(id, this.props.data.allProducts);
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
          key={index}
          index={index}
          addQty={this.addQty}
          removeQty={this.removeQty}
          updatedState={this.props.updatedState}
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
