
const _radius = Symbol(); // Symbol() is a function called to generate a symbol
const _draw = Symbol();

// class Circle
class Circle {
  constructor(radius) {
    // this.radius = radius; // accessing using the dot-notation
    // this['radius'] = radius; // accessing using break notation
    this[_radius] = radius; // accessing using the symbol as a property name instead of 'string'
  }

  // Computed Property Names, ES6 Style
  // add breaket and inside of it, we add an expression
  // once the result is evaluated, the result get used as the name of the property
  // or method
  [_draw]() {}
}

const c = new Circle(1);
// console.log(c._radius);
// console.log(Object.getOwnPropertyNames(c));
// const key = Object.getOwnPropertySymbols(c)[0]; // get the 1st element in the array
// console.log(c[key]);


/**
 * Implementing private properties and methods when using
 * ES6 classes
 * There are three different approachs:
 *  - using an under_score
 * - Usingprimitive type symbol
 */

// Using under_score
// const c = new Circle(1);
// c._radius
