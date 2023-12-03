
// Circle Constructor function
// Introduce some complexity
// function Circle(radius) {
//   this.radius = radius;

//   this.defaultLocation = {x: 0, y: 0}

//   this.computeOptimumLocation = function () {
//     // ...
//   }

//   this.draw = function () {
//     this.computeOptimumLocation();
//     console.log('Draw');
//   }
// }

const circle = new Circle(10);

/**
 * Implement Abstraction by hiding certains members from the outside
 * 'this' keyword references that new circle object
 * let's declare a variable inside the consustror function
 * the variable are local to the constructor function, with this technique
 * we can easy hide some members from the outside.
 */
function Circle(radius) {
  this.radius = radius;

  // Implementation details, defined as a local variable 
  let defaultLocation = {x: 0, y: 0}

  // converted to a private method
  let computeOptimumLocation = function () {
    // ...
  }

  this.draw = function () {
    let x, y;
    // accessed directly thanks to the concept of closure
    computeOptimumLocation();
    console.log('Draw');
  }
}

/**
 * In JS we have this concept called closure
 * function () { // parent function
 * 
 *  function () { // child function
 *    let x, y;
 * }
 * }
 * 
 * A function within another function, in th chikd function we can declare certain
 * variables and these are local varaibles that are inside the child function
 * their scope is limited to the child function.
 * 
 * In constrast to scope, we have closure
 * A closure determines what variable will be accessible to an inner fucntion.
 * The inner function will be able to access all the its local variables
 * as well as all the variables defined inside its parent fucntion 
 * 
 * The parent function's variables are in its scope as well as inthe closure 
 * of the inner function.
 * 
 * Scopre is temporaly and dies after being executed. But closure stays there.
 * the variables inside the parent function, they will preserve their state because they
 * are part of the closure of the child function.
 */

// Now, the public interrface of the circle object is simpler and easy to work with.
