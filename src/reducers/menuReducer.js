import Products from '../data/dummy.json';

export function menuReducer(state={productList: Products, cartList: []}, action){
    switch(action.type) {
        case 'ADD_TO_CART':
        console.log('cart', state.cartList);
            return{
                ...state,
                cartList: [...state.cartList, action.payload]
            }
        

        default:
        return state;
    }
}