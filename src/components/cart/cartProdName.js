import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

export default class CartProdName extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TableCell> <Typography
                      gutterBottom
                      variant="headline"
                      component="h2"
                      style={{ fontSize: 20 }}
                    >
                     { this.props.name}
                    </Typography></TableCell>
        );
    }
    
}