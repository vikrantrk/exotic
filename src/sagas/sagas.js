import { all } from "redux-saga/effects";
import {cartSaga} from './cartSaga';
import { loginSaga } from './loginSaga';

function* mySaga() {
  yield all([
    loginSaga,
    cartSaga
  ]);
}

export default mySaga;
