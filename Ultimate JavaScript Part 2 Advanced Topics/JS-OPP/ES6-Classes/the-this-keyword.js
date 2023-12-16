// 'use strict'; // strict mode in JS

// const Circle = function () {
//   this.draw = function () {
//     console.log(this); // 'this' points to the Circle{} object
//   }
// };

// const c = new Circle();

// // Method call
// // We are calling a method draw() on an object
// c.draw(); // Circle {draw: ƒ}

// const draw = c.draw;

// // Function call
// // Because we are calling as a stand alone function
// // default it will point to the windows object in the browser and global in node
// draw();


// == How the 'this' keyword behavior in ES6 classes ===

// Circle class
class Circle {
  draw() {
    console.log(this);
  }
}

// create a reference to the Circle class
const c = new Circle();

const draw = c.draw;
draw(); // undefined, because the body of Circle class is executed in strict Mode
