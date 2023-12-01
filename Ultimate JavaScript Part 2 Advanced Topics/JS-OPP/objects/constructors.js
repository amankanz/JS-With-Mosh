
// Factory function
function createCircle(radius) {
  return {
    radius, // ES6-style
    draw: function () {
      console.log('Draw');
    }
  };
}

const circle = createCircle(1);

// circle.draw();

// Create an object using a constuctor function
// Constructor function
//In jS we don't have the concept of classes
function Circle(radius) {
  /**
   * Naming convention the first letter should be uppercase
   * Use the 'this' keyword to set the propwerty of this object
   * 'this' is basically a reference to the object that
   * is executing this piece of code  
   */
  
  // console.log('this', this); // 'this' point to the Circle Object because we used the new operator
  this.radius = radius; // set the radius property to the radius argument
  this.draw = function() {
    console.log('Draw');
  }
}
// Create a new circle
const another = new Circle(1); // using the new operator to call the Circle function

/**
 * Imagine we have a new empty object in memory, now
 * we are using 'this' reference that object.
 * and then use that dot nation to set various property
 * of that onject.  
 * 
 * When use the 'new' operator a few using happen
 * this 'new' operator will create an empty object like this {}
 * then it will set the 'this' keyword to point to that object {}
 * Because by default 'this' point to the global object
 * 
 * In the browser the globalobject is the window object
 * In Node the global object is global
 */

/**
 * NB: when use the 'new' operator to call a fucntion
 * three thrings happen:
 * 'new' operator will create an empty object
 * then it sets 'this' keyword to point to the object
 * finally it will return that object from the constructor function
 * 
 * If we return an object in a function we refer to that
 * function as a Factory Function
 * In constrast, If we use the 'this' keyword along with 
 * the 'new' operator, we refer to that function
 * as a Constructor Function
 */