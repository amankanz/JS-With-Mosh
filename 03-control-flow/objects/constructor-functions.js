
// Another pattern to create object
// Constructor function

// Naming convention for Factory function
// Camel notation: camelNotation

// Naming convention for Constructor function
// Pascal notation: PascalNotation

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

// When using the operator new keyword three things happen:
// it creates an emply JS object => const x = {};
// then it sets the 'this' to point to this new object (const x = {}) 
// then finally new operator will return this new object from this function  


// Factory vs Constructor fuction
// Factory function, we simply call a function and in this function we return a new object. 

// Constructor function, we use a 'new' operator instead of return an object we return the 'this' keyword