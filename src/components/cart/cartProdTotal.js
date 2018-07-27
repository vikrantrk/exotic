import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const CartProdTotal = (props) => {
    return(
        <TableCell numeric> <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >
                 ${ props.total}
                </Typography></TableCell>
    );
}

export default CartProdTotal;