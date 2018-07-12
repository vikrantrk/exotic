export const setCartValue = (key, value) => {

    if(!getCartValue(key)){
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

export const isLoggedIn = (key, flag) => {
    localStorage.setItem(key, JSON.stringify(flag));
}