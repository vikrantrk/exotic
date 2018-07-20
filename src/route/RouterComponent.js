import React from 'react';
import { Route } from 'react-router';
import Home from '../components/home';
import About from '../components/about';
import MenuContainer from './../containers/menuContainer';
import CartContainer from './../containers/cartContainer';


const RouterComponent = (props) => {
    return (
        <div>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/menu' component={MenuContainer} />
                <Route exact path='/cart' component={CartContainer} />
            </div>
        </div>
    );
}

export default RouterComponent;