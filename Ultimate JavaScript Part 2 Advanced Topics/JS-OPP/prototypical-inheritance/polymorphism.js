
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

Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
}

// Define a constructor Square
function Square() {
}

// Sqare Object inherites from Shape object
extend(Square, Shape); // SquareObject inherites from ShapeObject

// Method overrriding
Square.prototype.duplicate = function () {
  console.log('duplicate square');
}

const shapes = [
  new Circle(),
  new Square()
];

for(let shape of shapes)
  shape.duplicate();
