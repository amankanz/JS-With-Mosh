
// Circle Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Draw');
  }
}

const circle = new Circle(10);

/**
 * Sometimes we need to etarate or enumate the properties 
 * of an object.
 * we can do that using the 'for in' loop.
 */
// for (const key in circle) {
//   console.log(key);
// }

// Get the value of those properties
// Use the breaket notation to access a member
// for (const key in circle) {
//   console.log(circle[key]);
// }

// Get only the properties and not the methods
// for (let key in circle) {
//   if(typeof circle[key] !== 'function')
//     console.log(circle[key]);
// } 

// Another approach to get only the keys in an object
/**
 * The built-in Object that we have, has a method
 * called 'key()' we can pass our circle object as an argument
 * and this will return all the keys in the cirlce as an array, 
 */
const keys = Object.keys(circle);

console.log(keys);

// Find out if an object has a given property use the 'in' operator
// if ('radius' in circle)
//   console.log('Circle has radius');

/**
 * NB: To enumerate all the members of an object use the 'for in' loop.
 * To get all the keys in an object use the 'Object.keys()' and 
 * To check for the existence of a property or method in an object use the 'in'
 * operator.
 */
