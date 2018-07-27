import { all, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_CART_DATA, SUCCESS_CART_DATA,ADD_COUNT,
  REMOVE_COUNT,
  ADD_ITEM_QTY,
  REMOVE_ITEM_QTY,
  GET_SELECTED,
  DELETE_ITEM,
  UPDATE_PRODUCT 
} from "./../constants/constants";
import { userDetails } from "./../effects/dataUtility";
import { cartListItems } from "./../effects/dataUtility";



function* getCartData(data) {
  console.log("cart data", data);
  try {
    const cartItems = yield call(cartListItems, data.payload);
    yield put({
      type: SUCCESS_CART_DATA,
      payload: cartItems
    });
  } catch (err) {
    console.log("error", err);
  }
}




function* addItemCount(payload) {
  let i = 0;
  const cartLen = payload.payload.data.length;

  for (i; i < cartLen; i++) {
    if (payload.payload.id === payload.payload.data[i].ProductId) {
      if (!payload.payload.data[i].count) {
        payload.payload.data[i].count = 1;
        console.log("if", payload.payload.data[i].count);
        yield put({ type: ADD_ITEM_QTY, payload: payload.payload.data });
        yield put({ type: GET_SELECTED, payload: payload.payload.id });
        return;
      } else {
        console.log("else b4", payload.payload.data[i].count);
        payload.payload.data[i].count = payload.payload.data[i].count + 1;
        console.log(
          "else after",
          payload.payload.data[i].count,
          payload.payload.data
        );
        yield put({ type: ADD_ITEM_QTY, payload: payload.payload.data });
        yield put({ type: GET_SELECTED, payload: payload.payload.id });
        return;
      }

      console.log("data", payload.payload.data);
    }
  }
}



function* removeItemCount(payload) {
  let i = 0;
  const cartLen = payload.payload.data.length;

  for (i; i < cartLen; i++) {
    if (payload.payload.id === payload.payload.data[i].ProductId) {
      if (payload.payload.data[i].count && payload.payload.data[i].count > 0) {
        payload.payload.data[i].count--;
        console.log("remove", payload.payload.data[i].count);
        yield put({ type: REMOVE_ITEM_QTY, payload: payload.payload.data });
        yield put({ type: GET_SELECTED, payload: payload.payload.id });
      }
      if (payload.payload.data[i].count < 1)
        payload.payload.data[i].isAdded = false;

    }
  }
}


function* deleteCartItem(payload) {
   console.log('saga', payload);
   const token = yield select(getToken);
   console.log('TokenData:', token);
   payload.payload.data.splice(payload.payload.index, 1);

   const cartLen = token.productList.length;
   let selectedData = [];
   let selectedInd;
   let i = 0;
   for (i; i < cartLen; i++) {
     // const selected = payload.payload.data.find((obj) =>  {return obj.ProductId === payload.payload.id });
     if (payload.payload.id === token.productList[i].ProductId) {
      token.productList[i].isAdded = false;
      token.productList[i].count = 0;
         
 
       yield put({ type: UPDATE_PRODUCT, payload: token.productList });
       yield put({ type: SUCCESS_CART_DATA, payload: payload.payload.data });
       /* yield put({ type: SUCCESS_ADD_TO_CART, payload: payload.payload.id });
       yield put({ type: GET_SELECTED, payload: payload.payload.id }); */
     }
   }

   

   
}

const getToken = (state) => state.cart

export const cartSaga = [
  takeEvery(REMOVE_COUNT, removeItemCount),
  takeEvery(DELETE_ITEM, deleteCartItem),
  takeEvery(ADD_COUNT, addItemCount),
  takeEvery(GET_CART_DATA, getCartData)
]