import {
    GET_CART_DATA,
    ADD_QUANTITY,
    REMOVE_QTY,
    DELETE_ITEM
  } from "./../constants/constants";
  
  export const getCartListData = (payload) => {
    return {
        type: GET_CART_DATA,
        payload
    }
}

export const addQty = (id) => {
    return{
        type: ADD_QUANTITY,
        payload: id
    }
}

export const removeQty = (id) => {
    return{
        type: REMOVE_QTY,
        payload: id
    }
}

export const deleteItem = (index) => {
    return{
        type: DELETE_ITEM,
        payload: index
    }
}