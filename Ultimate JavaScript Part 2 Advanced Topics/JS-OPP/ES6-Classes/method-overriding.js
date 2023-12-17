
class Shape {
  move() {
    console.log('move');
  }
}

// Circle class inherits from Shape class
class Circle extends Shape {
  // overriding the move() method
  move() {
    console.log('circle move');

    // calling some of the methods implimented in baseclass
    super.move();
  }
}

const c = new Circle();
