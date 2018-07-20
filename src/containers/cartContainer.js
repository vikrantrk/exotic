import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/cart";

class CartContainer extends Component{
    render(){
        console.log('cartContainer', this.props)
        return(
            <Cart />
        );
    }
}

const mapStateToProps = state => {
    return{
        cartList: state.menu.cartList
    }
}

export default connect(mapStateToProps)(CartContainer);