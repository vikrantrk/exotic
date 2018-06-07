export const setCartValue = (key, value) => {

    console.log(value);
    if(!getCartValue(key)){
        console.log(getCartValue());
        let cartArray = [];
        cartArray.push(value);
        localStorage.setItem(key, JSON.stringify(cartArray));
    }
    else {
        let cartArray = JSON.parse(localStorage.getItem(key));
        cartArray.push(value);
        localStorage.setItem(key, JSON.stringify(cartArray));
    }

};

export const getCartValue = (key) => {
    return localStorage.getItem(key);
};