
/**
 * Initialize an address object, 
 * first using a factory function
 * and then using the constructor function
 * Write a factory function and then a constructor function
 * to initialize the address object
 */

// Start of code
// Pseudocode
// create a factory and constructor function

// let address = {
//   street: 'abc',
//   city: 'xyz',
//   zipCode: 'cde'
// }

// Factoty Function
// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode
//   }
// }

// let address = createAddress('a', 'b', 'c');

// console.log(address);

// Constructor Function
// function CreateAddress(street, city, zipCode) {
//   this.street = street,
//   this.city = city,
//   this.zipCode = zipCode
// }

// const address3 = new CreateAddress('kampla-032', 'kampla', '00256');

// function showAddress(obj) {
//   for (const key in obj) 
//     console.log(key, obj[key]);
  
// }

// showAddress(address3);

// Mosh's solution on Constructor function
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address = new CreateAddress('x', 'y', 'z');

console.log(address);

// End of the code