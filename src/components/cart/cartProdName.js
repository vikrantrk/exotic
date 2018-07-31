import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const CartProdName = (props) => {
    return(
        <TableCell> <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >
                 { props.name}
                </Typography></TableCell>
    );
}

export default CartProdName;