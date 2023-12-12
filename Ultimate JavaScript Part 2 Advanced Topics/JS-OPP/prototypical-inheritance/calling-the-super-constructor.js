
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

// constructor function
function Circle(radius, color) {
  Shape.call(this, color); // call the super constructor

  this.radius = radius;
}


// Reset the prototype of the Circle
Circle.prototype = Object.create(Shape.prototype);


Circle.prototype.constructor = Circle; // seting the constructor to the Circle function


// set daw() as a prototypical member
Circle.prototype.draw = function () {
  console.log('draw');
}


// Define two objects
const s = new Shape();

const c = new Circle(1, 'red');
