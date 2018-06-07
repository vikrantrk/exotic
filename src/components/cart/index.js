import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix, Modal, Button} from 'react-bootstrap';
import { getCartValue } from '../../services/localStorage.service';

export default class Cart extends Component{

    render(){
        let products = JSON.parse(getCartValue('prodName'));
        console.log(products);
        return products.map((product,index) => {
            return(
                
            
              <Col sm={6} md={3} key={index}>
              <span className="thumbnail padding0">
      			<img src="http://exoticmunches.com/food-ordering-app/admin/backgroundImg/family-plan-bg_783.jpg" />
      			<h4>{product.Name}</h4>
      			
      			<p className="description">{product.Description} </p>
      			<hr className="line" />
      			<Row>
      				<div className="col-md-6 col-sm-6">
      					<p className="price">${product.Price}</p>
      				</div>
      				<div className="col-md-6 col-sm-6">
      				<button className="btn btn-info right cartBtn" onClick = {(e) => this.setCart(e, 'prodName', product)} >Add to Cart</button>
      				</div>
      				
      			</Row>
    		</span>
                
              </Col>
              
           
          
            );
        })
    }
}