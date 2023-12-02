
// Functions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Draw');
  }
}

// Circle is an object
// console.log(Circle.name); // returns the name of the object
// console.log(Circle.length); // returned the number of arguments.

/**
 * Every object has a property that references the cunstructor function
 * that was used to create an object
 */
// console.log(Circle.constructor); // returns the built-in constructor called 'function Function() {}'

/**
 * when declare a function using this syntax 'function Circle() {}';
 * internally, JS will use the function constructor 'function Function() {}'
 * to create this object.
 */
// const Circle1 = new Function('radius', `
// this.radius = radius;
//   this.draw = function() {
//     console.log('Draw');
//   }`);

// Create a function
// const circle = new Circle1(1);
// console.log(circle);

// Methods avaible in our functions
Circle.call({}, 1); // with call(), we can call a function
/**
 * the 1st argument is thisArg, here we pass an empty object '{}'
 * and 'this' will reference that object we passed in
 * 
 * After that we add arguments explicitly, if you have 1 argument we pass one
 * if we had multiple arguments, we would pass them explicitly
 * 
 * these expression are exactly the same:
 * Circle.call({}, 1);
 * new Circle(1)
 * 
 * When using the using the 'new' operator, internally it will create 
 * an empty {} 
 * and passes it as 1st argument to the call() method
 * and this object will determine the context for 'this' keyword will
 * reference the '{}' passed as 1st argument of the call() method
 * the 1st argument of the call() method specifies the target of 'this'
 */  

Circle.apply({}, 1);
/**
 * exaclty as the call() method, we can call a function
 * but instead of passing all the elements explicitly, we passe them in an array
 * this is usefull, if you want to pass an array as a second argument
 * to the apply() method 
 */



const another = new Circle(1);

/**
 * Takeaway:
 * In JS, functions are objects. 
 */
