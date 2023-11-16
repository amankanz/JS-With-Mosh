
// Constructor function
function Circle(radius) {
  // the this keyword in JS is a reference to an empty object
  this.radius = radius;
  this.draw = function () {
    console.log('Draw');
  }
}

// Create a circle object using the constructor function
const circle = new Circle(1);

// In JS every object has a property called constuctor and that references the function that was used to construct or create that object

const another = new Circle(1);

console.log(another.constructor);

console.log(circle.constructor);

// when using this syntax
let x = {};



// Every obeject has a constructor property, and that references a function that was used to create  that object