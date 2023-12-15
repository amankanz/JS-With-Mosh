
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  // Because the draw() method is avaible on an instance
  // of class, which is an object
  // draw() is specific to the circle object
  draw() {
  }

  // Static Method
  // Not tied to a particula circle object
  // but accessible on the class reference
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  } 
}

// const circle = new Circle(1);
const circle = Circle.parse('{"radius": 1}')
console.log(circle);

/**
 * NB: We use static method to create utility functions that are not 
 * tied to a particular object
 */

// Another example
// If the Built-in Object MATH was existing in JS ES6
class Math2 {
  static abs(value) {
    //...
  }
}

Math2.abs()
