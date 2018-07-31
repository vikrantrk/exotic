import Products from '../data/dummy.json';
import {
  UPDATE_QUANTITY_SUCCESS,
  ADD_TO_CART_SUCCESS
} from "./../constants/constants";

export function cartReducer(state = { allProducts: Products.ProductCollection, cartList: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:

    return{
        ...state,
        allProducts: state.allProducts,
        cartList: [...state.cartList, action.payload]
    }

    case UPDATE_QUANTITY_SUCCESS:
      return{
        ...state,
        cartList: [
          ...action.payload
          ]

      }

    default:
      return state;
  }
}
