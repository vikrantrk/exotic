import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  VALIDATE_USER,
  VALIDATE_USER_SUCCESS,
  LOGIN_MODAL_VISIBILITY,
  UPDATE_PRODUCT,
  SUCCESS_ADD_TO_CART,
  ADD_TO_CART,
  ADD_COUNT,
  REMOVE_COUNT,
  ADD_ITEM_QTY,
  REMOVE_ITEM_QTY,
  GET_SELECTED
} from "./../constants/constants";
import { loginAPI } from "./../effects/apiCalls";
import { userDetails } from "./../effects/dataUtility";
import {cartSaga} from './cartSaga';

function* watchValidateUser() {
  yield takeEvery(VALIDATE_USER, validateUserLogin);
}

function* validateUserLogin(data) {
  try {
    const response = yield call(loginAPI, data.payload);
    console.log("response", response);

    const userDetails1 = yield call(userDetails, response.data);
    yield put({
      type: VALIDATE_USER_SUCCESS,
      payload: { loggedInStatus: true, loggedInData: userDetails1 }
    });

    yield put({ type: LOGIN_MODAL_VISIBILITY, payload: false });
  } catch (err) {
    console.log("error", err);
  }
}

function* updatedCartValues() {
  yield takeEvery(ADD_TO_CART, addCartValues);
}

function* addCartValues(payload) {
  console.log('saga', payload)
  let i = 0;
  const cartLen = payload.payload.data.length;
  let selectedData = [];
  let selectedInd;

  for (i; i < cartLen; i++) {
    // const selected = payload.payload.data.find((obj) =>  {return obj.ProductId === payload.payload.id });
    if (payload.payload.id === payload.payload.data[i].ProductId) {
      selectedData.push(payload.payload.data[i]);
      selectedInd = i;
      payload.payload.data.splice(selectedInd, 1, payload.payload.data[i]);
      payload.payload.data[i].isAdded = true;
      if (!payload.payload.data[i].count){
            payload.payload.data[i].count = 1;
        }
      else
            payload.payload.data[i].count++

      yield put({ type: UPDATE_PRODUCT, payload: payload.payload.data });
      yield put({ type: SUCCESS_ADD_TO_CART, payload: payload.payload.id });
      yield put({ type: GET_SELECTED, payload: payload.payload.id });
    }
  }
}





function* mySaga() {
  yield all([
    watchValidateUser(),
    updatedCartValues(),
    cartSaga
  ]);
}

export default mySaga;
