export const addToCart = (id) => {
    console.log('id', 'hello');
    return{
        type: 'ADD_TO_CART',
        payload: id
    }
}