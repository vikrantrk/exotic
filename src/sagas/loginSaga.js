import {  call, put, takeEvery } from "redux-saga/effects";
import {
    VALIDATE_USER,
    VALIDATE_USER_SUCCESS,
    LOGIN_MODAL_VISIBILITY,
  } from "./../constants/constants"; 

import { loginAPI } from "./../effects/apiCalls";
import { userDetails } from "./../effects/dataUtility";

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

export const loginSaga = [
    takeEvery(VALIDATE_USER, validateUserLogin)
  ]