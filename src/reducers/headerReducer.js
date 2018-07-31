import {
    SIGNUP_MODAL_VISIBILITY,
    LOGIN_MODAL_VISIBILITY,
    VALIDATE_USER_SUCCESS
  } from "./../constants/constants";
  
  export function headerReducer(state={isSignupModalVisible: false, isLoginModalVisible: false, isLoggedIn: false, loggedInUser: false}, action){
    switch(action.type) {
        case SIGNUP_MODAL_VISIBILITY:
            return {
                ...state,
                isSignupModalVisible: action.payload
            }

        case LOGIN_MODAL_VISIBILITY:
            return{
                ...state,
                isLoginModalVisible: action.payload
            }

        case VALIDATE_USER_SUCCESS:
        console.log('reducer', action);
            return{
                ...state,
                isLoggedIn: action.payload.loggedInStatus,
                loggedInUser: action.payload.loggedInData

            }

        default:
            return state;
    }
}