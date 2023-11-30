
// Use the 'let' keyword in ES6 which is the replacement for var
// As best practice when declaring a varaible use either 'let' keryword or 'const'

// An Object in JS is a collection of key value pairs.
// Object literals syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
    console.log('Draw');
  }
};

/**
 * The circle object has three members if a members is 
 * a function, we refer to it as a method, draw() is a method
 * other members are called properties.
 * 
 * In OOP, Properties and methods are fundamentally different because of
 * properties are used to hold values.
 * A function or method is used to define some logic.
 */

// Access its members using the dot notation
circle.draw();

