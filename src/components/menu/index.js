import React, { Component } from 'react';
import Products from '../../data/dummy.json';

export default class Menu extends Component{

    componentDidMount(){
        console.log(Products);
    }
    
    render(){
        return(
            <h1> Home </h1>
        );
    }
}