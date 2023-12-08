
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log('move');
  }
}

// Prototype members
Circle.prototype.draw = function () {
  console.log('draw');
}

const c1 = new Circle;

// Object.keys only retrns instance members
console.log(Object.keys(c1));

// forin loop returns all the members (instance + prototype)
for(let key in c1) console.log(key);

// in JS we use the the word "own" instead of instance
// own property vs prototype property
