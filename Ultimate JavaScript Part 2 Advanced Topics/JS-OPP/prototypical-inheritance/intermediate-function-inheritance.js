
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

// create a function to be re-used for setting up the prototype chain
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// constructor function
function Circle(radius, color) {
  Shape.call(this, color); // call the super constructor

  this.radius = radius;
}

// entend the circleObject
extend(Circle, Shape);

// Reset Circle.prototype
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle; // seting the constructor to the Circle function

// Square constrcutor function
function Square(size) {
  this.size = size;
}

// exetend squareObject
extend(Square, Shape);

// Square inherites from the shapeObject
// Reset Square.prototype
// Square.prototype = Object.create(Shape.prototype);
// Reset Square.prototype.constructor
// Square.prototype.constructor = Square;


// set daw() as a prototypical member
Circle.prototype.draw = function () {
  console.log('draw');
}


// Define three objects
const s = new Shape();

const c = new Circle(1, 'red');

const sq = new Square(10);
