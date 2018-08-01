import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const CartProdPrice = (props) => {
    console.log('Total', props)
    return(
        
                <TableRow className="tblRow" >
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >Total</Typography></TableCell>
                <TableCell> <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >
                 {calculateCartTotal(props.data)}
                </Typography></TableCell>
                </TableRow>
    );
}

const calculateCartTotal = (data) => {
    let total = 0;
    const cartLength = data.length;
    return data.map((cartItem, index) => {
        total += cartItem.Product.Price * cartItem.Product.quantity;
        if( index === cartLength - 1 )
         return total;
    });
}
export default CartProdPrice;