import Products from '../data/dummy.json';

export function cartReducer(state = { productList: Products.ProductCollection, cartDataItems: [], updatedState: '' }, action) {
  switch (action.type) {
    case "SUCCESS_CART_DATA":
      console.log("red cartItems", action.payload);
      return {
        ...state,
        cartDataItems: [...action.payload]
      };

    case "ADD_ITEM_QTY":
      return {
        ...state,
        productList: [...action.payload]
      };

    case "REMOVE_ITEM_QTY":
      return {
        ...state,
        productList: [...action.payload]
      };

    case "GET_SELECTED":
      return {
        ...state,
        updatedState: action.payload
      };

      case 'UPDATE_PRODUCT':
      console.log('reducer', action.payload)
            return{
                ...state,
                productList: [...action.payload]
            }

    default:
      return state;
  }
}
