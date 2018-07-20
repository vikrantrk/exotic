import Products from '../data/dummy.json';

export function menuReducer(state={productList: Products.ProductCollection,updatedState:'', cartList: []}, action){
    switch(action.type) {
        case 'SUCCESS_ADD_TO_CART':
            return{
                ...state,
                cartList: [...state.cartList, action.payload]
            }

        case 'UPDATE_PRODUCT':
            return{
                ...state,
                productList: [...action.payload]
            }

         case 'ADD_ITEM_QTY':
            return{
                ...state,
                productList: [...action.payload]
            }

        case 'REMOVE_ITEM_QTY':
            return{
                ...state,
                productList: [...action.payload]
            }
        
        case 'GET_SELECTED':
            return{
                ...state,
                updatedState: action.payload
            }

        default:
        return state;
    }
}