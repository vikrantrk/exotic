

export function menuReducer(state={cartList: []}, action){
    switch(action.type) {
        case 'SUCCESS_ADD_TO_CART':
            return{
                ...state,
                cartList: [...state.cartList, action.payload]
            }

        

         

        default:
        return state;
    }
}