
/**
 * create two function:
 * one is called areEqual that receive two parameter objects 
 * address1 and address2
 * then the function check to see if the passed in objects are equal
 * the function should return true, if the object properties are equal otherwise it should return false.
 *  The second function called areSame, takes in two parameter
 * this function should tell us if the two parameter object are 
 * pointing to the same object or referencing the same object.
 */

// Start of the code
const address1 = new CreateAddress('x', 'y', 'z');
const address2 = new CreateAddress('x', 'y', 'z');
const address3 = address1;

// Construct function
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// pseudocode
// create a function one named areEqual which takes in two parameter objects address1 and address2
// Declare two variables fromAddress1 and fromAddress2 
// Etarate through the objects and store the result to the variables fromAddress1 and fromAddress2
// if fromAddress1 muches fromAddress2 return true otherwise return false.
// create a second function called areSame that takesin two parameter objctes
// compare the tow object
// if they are referencing the same object return true otherwise return false.

// Function one
function areEqual(obj1, obj2) {
  let fromAddress1 = '';
  let fromAddress2 = '';

  for (const key in obj1) {
    fromAddress1 = `${key}: ${obj1[key]}`;
    // console.log(fromAddress1);

  }

  for (const key in obj2) {
    fromAddress2 = `${key}: ${obj2[key]}`;
    // console.log(fromAddress2);
  }

  if (fromAddress1 === fromAddress2)
    return true;
  else
    return false;
}

console.log(areEqual(address1, address2));

// Function two
function areSame(obj1, obj2) {
  return obj1 === obj2;
}

console.log(areSame(address1, address3));
// End of the code