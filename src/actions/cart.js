export const getCartListData = (payload) => {
    return {
        type: 'GET_CART_DATA',
        payload
    }
}

export const addCount = (id, data) => {
    return{
        type: 'ADD_COUNT',
        payload: {id,data}
    }
}

export const removeCount = (id, data) => {
    return{
        type: 'REMOVE_COUNT',
        payload: {id, data}
    }
}

export const deleteItem = (payload) => {
    return{
        type: 'DELETE_ITEM',
        payload
    }
}