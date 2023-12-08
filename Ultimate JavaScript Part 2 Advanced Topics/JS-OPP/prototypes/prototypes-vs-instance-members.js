
 // constructor function
 function Circle(radius) {
  // Instance Members
  this.radius = radius;

  // this.draw = function () {
  //   // console.log('Draw');
  // }

  this.move = function () {
    // referencing a prototype member
    this.draw();

    console.log('move');
  }
 }

 const c1 = new Circle(10);
 const c2 = new Circle(10);

 // Using the Inheritance concept
 // draw() method and put it inside c1, c1 prototype circleBase
 // to achieve a single instance of the draw() method

// Accessing the Cicle constructor
// Prototype members
Circle.prototype.draw = function () {
  // referencing instance member
  // this.move();

  console.log('Draw');
}

// inside the c1, draw() method is now inside the prototype
// circleBase 

// Instance Vs Prototype members
// over write the implementation of toString() method
Circle.prototype.toString = function () {
  return 'Circle with radius ' + this.radius;
}

// Referenceing other members
// calling an instance member in the prototype members


