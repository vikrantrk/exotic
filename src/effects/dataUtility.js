export function userDetails(user) {
   return new Promise((resolve, reject) => {  
        let userDetails = {firstname: user[0].firstname, lastname: user[0].lastname};
        resolve(userDetails);  
      });
}