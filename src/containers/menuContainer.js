import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu';
import {addToCart} from '../actions/menu';

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(id){
        //console.log('id', id, this.props);
        this.props.addToCart(id);
    }

    render(){
        console.log('test',this.props);
        return(
            <Menu productList={this.props} addToCart = {this.addToCart} />
        );
    }
}

const mapStateToProps = (state) => {
    return{
        allProducts: state.menu.productList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart:(id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);