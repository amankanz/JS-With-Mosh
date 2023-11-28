
/**
 * Create an object with properties: street, city amd Zipcode
 * the name of your object should be address.
 * Then create a function name showAdress, that takes in a parameter object
 * and displays all the properties in this object along with their values 
 */

// Start of the code
// Pseudocode
// create an object address, with properties street, city and zipcode
// create a function showAddress, that takes in a parameter (address) an object
// then display all the properties inside the object with their value
// const address = {
//   street: 'High-street Mbarara',
//   city: 'Mbarara',
//   zipcode: '00256'
// } 

// function showAddress(obj) {
//   console.log(obj);
// }

// showAddress(address);

// Mosh's Solution
let address = {
  street: 'abc',
  city: 'xyz',
  zipCode: 'cde'
}

function showAddress(obj) {
  for (let key in obj) 
      console.log(key, address[key]);
  
}

showAddress(address);
// End of the code