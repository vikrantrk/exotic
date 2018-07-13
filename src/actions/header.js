export const setSignupModalVisibility = (payload) => {
    return {
        type: 'SIGNUP_MODAL_VISIBILITY',
        payload
    }
}

export const setLoginModalVisibility = (payload) => {
    return {
        type: 'LOGIN_MODAL_VISIBILITY',
        payload
    }
}

export const validateUser = (payload) =>{
    
    return{
        type: 'VALIDATE_USER',
        payload: payload
    }
}

export const logoutUser = (payload) => {
    return{
        type: 'VALIDATE_USER_SUCCESS',
        payload: payload
    }
}