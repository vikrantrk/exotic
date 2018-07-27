import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const CartProdPrice = (props) => {
    return(
        <TableCell> <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >
                 { props.price}
                </Typography></TableCell>
    );
}

export default CartProdPrice;