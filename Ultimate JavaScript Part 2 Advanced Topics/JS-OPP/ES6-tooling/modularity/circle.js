
// Private property
// Implementation Detail
const _radius = new WeakMap();

// Circle class
// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

// module.exports.Circle = Circle;
module.exports = Circle;


/**
 * module.exports
 * 
 * the 'module' keyword refers to the current module
 * the 'module' has a property called 'erports' which is an object
 * we can add one or more property to this object.
 * 
 * We have added a property called 'Circle' and set it to the Circle class
 * 
 */
