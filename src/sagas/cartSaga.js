import { call, put, takeEvery, select } from "redux-saga/effects";
import { ADD_TO_CART, ADD_TO_CART_SUCCESS, ADD_QUANTITY, REMOVE_QTY, DELETE_ITEM, UPDATE_QUANTITY_SUCCESS } from "./../constants/constants";

const allProducts = state => state.cart.allProducts;
const cartItems = state => state.cart.cartList;

function* addToCart(data) {
  const productList = yield select(allProducts);
  let i = 0;
  for (i; i < productList.length; i++) {
    if (data.payload === productList[i].ProductId) {
      productList[i].quantity = 1;
      yield put({
        type: ADD_TO_CART_SUCCESS, 
        payload: { Product: productList[i] }
      });
    }
  }
}

function* addQty(data) {
  const cartList = yield select(cartItems);
  let index = cartList.map((x) => { return x.Product.ProductId; }).indexOf(data.payload);
  cartList[index].Product.quantity++;
  yield put({
    type: UPDATE_QUANTITY_SUCCESS, 
    payload: cartList 
  });

}

function* removeQty(data) {
    const cartList = yield select(cartItems);
    let index = cartList.map((x) => { return x.Product.ProductId; }).indexOf(data.payload);
    if(cartList[index].Product.quantity > 1)
        cartList[index].Product.quantity--;
    yield put({
      type: UPDATE_QUANTITY_SUCCESS, 
      payload: cartList 
    });
  
  }

  function* deleteItem(data) {
    const cartList = yield select(cartItems);
    cartList.splice(data, 1);
    yield put({
      type: UPDATE_QUANTITY_SUCCESS, 
      payload: cartList 
    });
  
  }

export const cartSaga = [
  takeEvery(ADD_TO_CART, addToCart),
  takeEvery(ADD_QUANTITY, addQty),
  takeEvery(REMOVE_QTY, removeQty),
  takeEvery(DELETE_ITEM, deleteItem)
];
