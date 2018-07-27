import React, { Component } from "react";
//import { getCartValue } from '../../effects/localStorage.service';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./cart.css";
import CounterComponent from "./../menu/counterComponent";
import { cartListItems } from "./../../effects/dataUtility";
import CartImg from "./cartImg";
import CartProdName from "./cartProdName";
import CartProdPrice from "./cartProdPrice";
import CartProdTotal from "./cartProdTotal";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }
  addQty(id) {
    this.props.addQty(id, this.props.productList);
  }

  removeQty(id) {
    this.props.removeQty(id, this.props.productList);
  }

  componentDidMount() {
    this.props.getCartListData();
  }

  deleteItem(index,id, data) {
    this.props.deleteItem(index,id, data);
  }

  render() {
    console.log("cart comp", this.props.productList);
    return (
      <div className="parentContainer">
        <Grid container className="grid" spacing={16}>
          <Grid item xs={12} className="grid1">
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell className="deleteRow" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.cartListItems.map((cartItem, index) => {
                    return (
                      <TableRow className="tblRow" key={index}>
                        <CartImg />
                        <CartProdName name={cartItem.Name} />
                        <TableCell>
                          <CounterComponent
                            count={cartItem.count}
                            addQty={() => this.addQty(cartItem.ProductId)}
                            removeQty={() => this.removeQty(cartItem.ProductId)}
                          />
                        </TableCell>

                        <CartProdPrice price={cartItem.Price} />
                        <CartProdTotal
                          total={cartItem.Price * cartItem.count}
                        />
                        <TableCell>
                          <Button
                            variant="fab"
                            color="primary"
                            aria-label="Add"
                            onClick={this.decrement}
                            className="counterBtn"
                          >
                            <DeleteIcon onClick = {() => this.deleteItem(index,cartItem.ProductId, this.props.cartListItems)} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
