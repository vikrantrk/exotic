import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

export default class CartTblHeader extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell className="deleteRow" />
                  </TableRow>
        );
    }
    
}