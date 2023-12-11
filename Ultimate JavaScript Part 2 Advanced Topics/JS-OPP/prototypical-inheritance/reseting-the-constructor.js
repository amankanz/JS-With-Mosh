
// NB: Whenever you reset the prototype makesure to rest
//      the constructor as well
function Shape() {
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

// constructor function
function Circle(radius) {
  this.radius = radius;
}

// Set up inheritance
// Before Circle inherites from the objectBase
// Circle.prototype = Object.create(Object.prototype); // ObjectBase, implicity relationship 
// Having circleBase inherites fromthe shapeBase
// Reset the prototype of the Circle
Circle.prototype = Object.create(Shape.prototype);

// reseting the constructor
// Before reseting the reseting the protytpe of circle
// Cirle.prototype.constructor = Circle
// new Circle.prototype.constructor() => new Circle()
Circle.prototype.constructor = Circle; // seting the constructor to the Circle function


// set daw() as a prototypical member
Circle.prototype.draw = function () {
  console.log('draw');
}


// Define two objects
const s = new Shape();

const c = new Circle(1);