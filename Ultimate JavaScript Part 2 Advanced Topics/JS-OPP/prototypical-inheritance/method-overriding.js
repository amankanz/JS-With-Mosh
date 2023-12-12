
// Intermediate function inheritance
function extend(Child, Parent) {
  // Reseting the Child.prototype
  Child.prototype = Object.create(Parent.prototype);
  
  // Reseting Child.prototype.constructor
  Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape); // CircleObject inherites from ShapeObject

// Method overrriding
// After the extend() method, we redifine the method in the CircleObject
Circle.prototype.duplicate = function () {
  // Calling the implematation of the parent object in the child object
  // we are using 'this' 
  Shape.prototype.duplicate.call(this);

  console.log('duplicate circle');
}

const c = new Circle; // Creates a new Circle Object

/**
 * NB: Prototypical Inheritance in JS:
 * when accessing a prototype or method on an object
 * JS engine walks up the prototype chain and picks the first implimentation.
 */
