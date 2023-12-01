
// Factory function
// function createCircle(radius) {
//   return {
//     radius, // ES6-style
//     draw: function () {
//       console.log('Draw');
//     }
//   };
// }

// const circle = createCircle(1);

// Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('Draw');
//   }
// }

// Careate an object
// const another = new Circle(1);

// console.log(another.draw());

/**
 * Every object in JS has a property called constructor
 * and that references the function that was used to construct or
 * create an object
 */
// console.log(another.constructor); // returns the Circle function used to create another object

// console.log(circle.constructor); // returns a built-in constructor function 'function Object' in JS

/**
 * When creating an object using the the object literal syntax '{}'
 * internally the JS enginer uses this built-in constructor function
 * 'function Object{}'
 * 
 */

let x = {}; // let x = new Object{};
/**
 * when using using this syntax object literal '{}'
 * JS enginer will translate this code to something like this:
 * let x = new Object{}; 
 */

/**
 * The circle ocject, we created and returned from our factory function
 * and because we used the object literal syntax, internally it was create using 
 * the built-in Object constructor function
 * 
 * In JS we have other built-in constructors:
 * 'new String()'
 *  for creating string, quite often we use 
 * string literals: '', "". or ``
 * 
 *  'new Boolean()'
 * we use boolean literals: true or false
 * 
 * 'new Numbers()'
 * we use number literals: 1, 2, 3, ...
 * 
 * NB: Every object has a constructor property and that references
 *  the function that was used to create that object
 */
