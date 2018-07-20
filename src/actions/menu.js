export const addToCart = (id,data) => {
    return{
        type: 'ADD_TO_CART',
        payload: {id,data}
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