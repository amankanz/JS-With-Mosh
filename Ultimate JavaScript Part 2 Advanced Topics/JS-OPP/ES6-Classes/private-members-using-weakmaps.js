
const _radius = new WeakMap();
const _move = new WeakMap(); // Define another private property
// const privateProps = new WeakMap(); // Define one private property to contain all private properties and methods
// class Cricle
class Circle {
  constructor(radius) {
    // privateProps.set(this, {
    //   radius: radius,

    //   move: () => {
    //   }
    // });
    // using a single weakmap to access private property
    // privateProps.get(this).radius


    _radius.set(this, radius); // 1st argument of the set() has to be an object, 2nd argument is the radius 

    _move.set(this, () => {   // using an arrow function inside a constructor 'this' will be inherited from the constructor
      console.log('move', this);
    })
  }

  draw() {
    // console.log(_radius.get(this)); // access and logs the value of the radius property

    _move.get(this)(); // returns a funtion and then we call that very function

    console.log('draw');
  }
}

const c = new Circle(1);
