
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log('draw');
//   }
// }

// ES6 Style
class Circle {
  constructor(radius) {
    this.radius = radius;

    this.move = function () {};
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
