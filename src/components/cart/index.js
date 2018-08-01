import React, { Component } from "react";
//import { getCartValue } from '../../effects/localStorage.service';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./cart.css";
import CounterComponent from "./../menu/counterComponent";
import CartImg from "./cartImg";
import CartProdName from "./cartProdName";
import CartProdPrice from "./cartProdPrice";
import CartProdTotal from "./cartProdTotal";
import CartGrandTotal from "./cartGrandTotal";
import CartTblHeader from "./cartTblHeader";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }
  addQty(id) {
    this.props.addQty(id);
  }

  removeQty(id) {
    this.props.removeQty(id);
  }


  deleteItem(index) {
    this.props.deleteItem(index);
  } 

  render() {
    const data = this.props.cartData/* .Product || this.props.cartData */;
    return (
      <div className="parentContainer">
        <Grid container className="grid" spacing={16}>
          <Grid item xs={12} className="grid1">
            <Paper>
              <Table>
                <TableHead>
                  <CartTblHeader />
                </TableHead>
                <TableBody>
                  {data.map((cartItem, index) => {
                      
                    return (
                      <TableRow className="tblRow" key={index}>
                        <CartImg />
                        <CartProdName name={cartItem.Product.Name} />
                        <TableCell>
                          {<CounterComponent
                            count={cartItem.Product.quantity}
                            addQty={() => this.addQty(cartItem.Product.ProductId)}
                            removeQty={() => this.removeQty(cartItem.Product.ProductId)}
                          /> }
                        </TableCell>

                        <CartProdPrice price={cartItem.Product.Price} />
                        <CartProdTotal
                          total={cartItem.Product.quantity * cartItem.Product.Price}
                        />
                        <TableCell>
                          <Button
                            variant="fab"
                            color="primary"
                            aria-label="Add"
                            /* onClick={this.decrement} */
                            className="counterBtn"
                          >
                            <DeleteIcon onClick = {() => this.deleteItem(index)}  />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                    
                  
              })}
              <CartGrandTotal data = {data} />
                </TableBody>
              </Table>
            </Paper>
            
          </Grid>
        </Grid>
      </div>
    );
  }
}
