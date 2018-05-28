import React, { Component } from 'react';
import Products from '../../data/dummy.json';
import { Grid, Row, Col, Clearfix, Modal, Button} from 'react-bootstrap';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.getProducts = this.getProducts.bind(this);
        this.checkIndex = this.checkIndex.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
        show: false,
        product:[]
        };
  }

    handleClose() {
    this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount(){
        console.log(Products);
    }

    checkIndex(index){
        //if(index%4 == 1)
        return 'clearfix';
    }

    getDetails(product){
        //this.setState({ product: product});
        this.setState({ show: true });
        console.log(product);
    }

    getProducts(){
        return Products.ProductCollection.map((product,index) => {
            return(
                
            
              <Col sm={6} md={3} key={product.ProductId} className={this.checkIndex(index)} onClick={this.handleShow(product)}>
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
      				<button className="btn btn-info right cartBtn">Add to Cart</button>
      				</div>
      				
      			</Row>
    		</span>
                
              </Col>
              
           
          
            );
        })
    }
    
    render(){
        return(
            <Grid>
                <Row className="show-grid">
                {this.getProducts()}
                </Row>

                <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>test </h4>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

            </Grid>
    );
        
    }
}