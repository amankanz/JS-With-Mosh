
// Define a private _radius
const _radius = new WeakMap();

// Define a Circle class
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // Define a getter in ES6
  get radius() {
    return _radius.get(this);
  }

  //Define a setter in ES6
  set radius(value) {
    // Validations
    if(value <= 0) throw Error('Invalid radius')
    _radius.set(this, value);
  }
}

const c = new Circle(1);
