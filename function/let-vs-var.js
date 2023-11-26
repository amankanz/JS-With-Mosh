
// Let vs Var keywords
// function start() {
//   for (var i = 0; i < 5; i++)
//     console.log(i);    

//   console.log(i);
// }

// start();

// NB: When declaring a variable with var keyword its scope
// is not limited to the block in which it's defined.
// It's limited to the function in which it's defined

// var => creates function scoped variables
// ES6 (ES2015): let, const => create block scoped variables

// Another Example
// function start() {
//   for (var i = 0; i < 5; i++)
//     if (true) {
//       // var color = 'red';
//       let color = 'red';
//     }    

//   console.log(color);
// }

// start();

// Second Issue with Var keyword on global variable
var color = 'blue'; 
let age = '24'; // Not attached to the window object in browsers

// console.log(window.color);
// When using var outside of a function it creates a global variable
// and attaches it on the window object in browsers

// Defining global function
// Technicaly a global function  is added to the window onject
// that is bad practice
function sayHi() {
  console.log('Hi');
}

// Take away: yAvoiid using the var keyword because it creates variables that are function scope not block scope
