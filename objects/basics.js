
// Object Oriented Programming (OOP)

//Objects
// An object is a collection of key value pairs.
// An object groups related variable
const circle = {
  // value inside of an objebt can be any value type in JS
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function () {
    console.log('Draw');
  }
};

circle.draw(); // draw method

// OOP is a style of programming where we see a program as a collection of object that talk to each other  to perfom some functionality
// In OOP if a function is part of an object call it a Method
// circle.draw(), here we are calling the draw method of circle object.

