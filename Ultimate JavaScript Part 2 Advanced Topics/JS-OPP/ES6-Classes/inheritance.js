
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

// To have circle Inherits from Shape class
// we add 'exetend' keyword
class Circle extends Shape {
  constructor(color, radius) {
    super(color);

    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1);
