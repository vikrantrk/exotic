import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

const CartImg = (props) => {
    return(
        <TableCell>
								<Avatar
								alt="Adelle Charles"
								src="http://exoticmunches.com/food-ordering-app/admin/backgroundImg/family-plan-bg_783.jpg"
								className="prodImg" 
							/>
                </TableCell>
    );
}

export default CartImg;