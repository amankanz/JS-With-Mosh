
// In jS there are two ways to define a function

// // Hoisting
// sayHello();

// // Not hoisted
// // sayGoodbye();
// console.log(number);

// // Function declaration
// function sayHello() {
//   console.log('Hellooooo');
// }

// // Function Expression
// const sayGoodbye = function() {};
// const number = 1;

// We can use classes with a Declaration or an Expression syntax

//Not hoisted
const c = new Circle();

// Class Declaration
class Circle {
}

// class Expression
const Square = class {
};
