
// Circle Constructor function
// Introduce some complexity
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = {x: 0, y: 0}

  this.computeOptimumLocation = function () {
    // ...
  }

  this.draw = function () {
    this.computeOptimumLocation();
    console.log('Draw');
  }
}

const circle = new Circle(10);

/**
 * There is a problem with this emplamation
 * Not all these members of the circle object should be accsessible
 * to the client or the consumer of  this object.
 */

/**
 * In OOP
 * we a concept called Abstraction, it means we should hide the details
 * and complexity and show only the essentials.
 * 
 * in our constructor Circle, we should hide the defaultLocation, as well as the computeOptimumLocation these are emplemation details. These details from the 
 * consumer of the circle object. That is the radius and the draw() method.
 */