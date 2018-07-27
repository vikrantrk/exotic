export function userDetails(user) {
   return new Promise((resolve, reject) => {  
        let userDetails = {firstname: user[0].firstname, lastname: user[0].lastname};
        resolve(userDetails);  
      });
}

export function cartListItems(props) {
  return new Promise((resolve, reject) => {  
		let cartItemsCount =props.cartList.length;
		
		console.log('promise', cartItemsCount)
		let allProdList = props.productList.length;
		let cartItems = [];
		for(let i=0; i<cartItemsCount; i++){
			for(let j=0; j<allProdList; j++){
				if(props.cartList[i] === props.productList[j].ProductId){
					cartItems = [...cartItems, props.productList[j]];
				//	console.log('cart items', cartItems);
					break;
				}
			}

    } 
    resolve(cartItems);
     });
}