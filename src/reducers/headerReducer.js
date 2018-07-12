export function headerReducer(state={isSignupModalVisible: false, isLoginModalVisible: false, isLoggedIn: false}, action){
    switch(action.type) {
        case 'SIGNUP_MODAL_VISIBILITY':
            return {
                ...state,
                isSignupModalVisible: action.payload
            }

        case 'LOGIN_MODAL_VISIBILITY':
            return{
                ...state,
                isLoginModalVisible: action.payload
            }

        case 'VALIDATE_USER_SUCCESS':
        console.log('reducer', action.data);
            return{
                ...state,
                isLoggedIn: true,

            }

        default:
            return state;
    }
}