import React from 'react';
import { Route } from 'react-router';
import Home from '../components/home';
import About from '../components/about';
import Menu from '../components/menu';
import Cart from '../components/cart';


const RouterComponent = (props) => {
    return (
        <div>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/menu' component={Menu} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    );
}

export default RouterComponent;