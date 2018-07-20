import React, { Component } from 'react';
//import { getCartValue } from '../../effects/localStorage.service';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './cart.css';

export default class Cart extends Component{
	constructor(props){
		super(props);
	}
    render(){
			console.log('cart', this.props)
		return(
			<div className="parentContainer">
			<Grid container className="grid" spacing={16}>
        <Grid item xs={12} className="grid1" >
        
        <Paper>
				<Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Fat (g)</TableCell>
            <TableCell>Carbs (g)</TableCell>
            <TableCell>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow class="tblRow">
                <TableCell>
								<Avatar
								alt="Adelle Charles"
								src="http://exoticmunches.com/food-ordering-app/admin/backgroundImg/family-plan-bg_783.jpg"
								className="prodImg" 
							/>
                </TableCell>
                <TableCell> <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  style={{ fontSize: 20 }}
                >
                  tes
                </Typography></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
              </TableRow>
        </TableBody>
      </Table>
				</Paper>
      </Grid>
    </Grid>
		</div>
		)
	}
}