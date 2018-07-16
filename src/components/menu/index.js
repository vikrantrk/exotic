import React, { Component } from "react";
import { /* Grid */ Row, Col, Clearfix, Modal } from "react-bootstrap";
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

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.getProducts = this.getProducts.bind(this);

    this.state = {
      show: false,
      product: []
    };

    console.log("style", this.props);
  }

  addToCart = (id) => {
    this.props.addToCart(id);
  }  

  getProducts() {
    return this.props.productList.allProducts.ProductCollection.map(
      (product, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index} /* onClick={() => this.getDetails(product)} */
          >
            <Card>
              <CardMedia
                className="productImg"
                image="http://exoticmunches.com/food-ordering-app/admin/backgroundImg/family-plan-bg_783.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >
                  {product.Name}
                </Typography>
                <Typography component="p" style={{ fontSize: 14 }}>
                  {product.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <Typography
                      variant="title"
                      gutterBottom
                      color="primary"
                      style={{ fontSize: 16 }}
                    >
                      ${product.Price}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <Button size="small" style={theme.palette.buttonPrimary} onClick ={() => this.addToCart(product.ProductId)} >
                      ADD TO CART
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <CounterComponent />
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        );
      }
    );
  }

  render() {
    return (
      <div className="parentContainer">
        <Grid container spacing={24} style={theme.palette.parentContainer}>
          {this.getProducts()}

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{this.state.product.Name} </h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Grid>
      </div>
    );
  }
}
