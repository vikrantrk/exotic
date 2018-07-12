import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { validateUser, validateUserSuccess } from './../constants/constants';
import { loginAPI } from './../effects/apiCalls';
import { userDetails } from './../effects/dataUtility';

function* watchValidateUser() {
    yield takeEvery(validateUser, validateUserLogin)
 }

function* validateUserLogin(data){
     console.log('saga', data);

     try {
        
        const response = yield call(loginAPI, data.payload);
        console.log('response',response);
       
        const userDetails1 = yield call(userDetails, response.data);
        yield put({ type: validateUserSuccess, data: userDetails1 });
        ;

       
      } catch(err) {
        console.log('error', err);
      }
    
    
 } 


function* mySaga() {
    yield all(
        [
            watchValidateUser()
        ]
    );
    
    
 }



 export default mySaga;