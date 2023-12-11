
function Shape() {
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

// constructor function
function Circle(radius) {
  this.radius = radius;
}

// set daw() as a prototypical member
Circle.prototype.draw = function () {
  console.log('draw');
}
// Set up inheritance
// Before Circle inherites from the objectBase
// Circle.prototype = Object.create(Object.prototype); // ObjectBase, implicity relationship 
// Having circleBase inherites fromthe shapeBase
Circle.prototype = Object.create(Shape.prototype);


// Define two objects
const s = new Shape();

const c = new Circle(1);

