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

export default class AllProducts extends Component{
    constructor(props){
        super(props);
    }
    

      addToCart = (id) => {
        this.props.addToCart(id);    
      }  
    
      shouldComponentUpdate(nextProps, nextState) {
        // console.log('Update:', nextProps.data.ProductId, nextProps.updatedState);
        if(nextProps.data.ProductId === nextProps.updatedState) {
          return true;
        } else {
          return false;
        }
      }
    

    render(){
        return(
            <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={this.props.index} /* onClick={() => this.getDetails(product)} */
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
                  {this.props.data.Name}
                </Typography>
                <Typography component="p" style={{ fontSize: 14 }}>
                  {this.props.data.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container>
                 
                  <Grid item xs={6} sm={6}>
                    
                    
                    {this.props.data.isAdded == true ? 
                      <Button size="small" style={theme.palette.buttonPrimary} style={theme.palette.success}>
                      ADDED TO CART
                    </Button>
                      : <Button size="small" style={theme.palette.buttonPrimary} onClick ={() => this.addToCart(this.props.data.ProductId)} >
                      ADD TO CART
                    </Button>}
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  {/* this.props.data.isAdded == true && this.props.data.count > 0 ?
                    <CounterComponent count = {this.props.data.count ? this.props.data.count: 0} addQty = {() => this.addQty(this.props.data.ProductId)} removeQty = {() => this.removeQty(this.props.data.ProductId)} />
                  : null */
                  }
                  <Typography
                      variant="title"
                      gutterBottom
                      color="primary"
                      style={{ fontSize: 16 }}
                      align = "right"
                      className="price"
                    >
                      ${this.props.data.Price}
                    </Typography>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        );
    }
}