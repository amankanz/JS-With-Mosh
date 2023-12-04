
// function Circle(radius) {
//   this.radius = radius;

//   // Implementation details, defined as a local variable 
//   let defaultLocation = {x: 0, y: 0}

//   // converted to a private method
//   let computeOptimumLocation = function () {
//     // ...
//   }

//   this.draw = function () {
//     let x, y;
//     // accessed directly thanks to the concept of closure
//     computeOptimumLocation();
//     console.log('Draw');
//   }
// }

/**
 * In OOP
 * defaultLocation and computeOptimumLocation are private members of the circle
 * object. 
 */

// function Circle(radius) {
//   this.radius = radius;

//   // Implementation details, defined as a local variable 
//   let defaultLocation = {x: 0, y: 0}

//   // with this we can read the defaultLocation property from the outside. 
//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   }
//   this.draw = function () {
//     let x, y;
//     // accessed directly thanks to the concept of closure
//     computeOptimumLocation();
//     console.log('Draw');
//   }
// }

// const circle = new Circle(10);
// circle.getDefaultLocation(); // calling defaultLocation as a method() 

/**
 * we have the private property defaultLocation
 * We want to read but not modiefied it.
 * 
 * Solution is to define a method()
 * 
 */

// Another way to access defaultLocation from the outside

function Circle(radius) {
  this.radius = radius;

  // Implementation details, defined as a local variable 
  let defaultLocation = {x: 0, y: 0}

  // with this we can read the defaultLocation property from the outside. 
  this.getDefaultLocation = function () {
    return defaultLocation;
  }
  this.draw = function () {
    let x, y;
    // accessed directly thanks to the concept of closure
    // computeOptimumLocation();
    console.log('Draw');
  }

  // another way of access defaultLocation from the outside
  Object.defineProperty(this, 'defaultLocation', {
    // Getter to read the property from Outside
    get: function () {
      return defaultLocation;
    },
    // Setter to set the property from Outside
    set: function (value) {
      // Perfom validation before setting the value of defaultLocation
      if(!value.x || !value.y)
        throw Error('Invalidate Location'); // Built-in constructor usedd to create error obj
      defaultLocation = value;
    }
  })
}

const circle = new Circle(10);
// circle.getDefaultLocation();
circle.defaultLocation = 1;
circle.draw()

/**
 * let's access defaultLocation property like this circle.defaultLocation
 * But we shouldn't be able to set or rewrite it, only read it.
 * we use the 'Object.defineProperty'
 * 
 * The 'Object.defineProperty()'
 * The 1st argument to this defineProperty() is the object we want
 * to add a new property to.
 * That object is the one that is referenced by 'this'. the new circle object.
 * 
 * The 2nd argument is the name of our property, in this case we want to call
 * 'defaultLocation' pass it as a 'string'
 * 
 * and the 3rd argument is an object, in this object we add a key value paire
 * the key is 'get:' (keyword for JS) and the value is a function () {}
 * 
 * A getter is a function that is used to read a property.
 * this property 'defaultLocation', we refer to this as a readOnly property.
 * 
 * Let's set the value of the 'defaultLocation' from the outsite.
 * we define an a 'setter'
 * In that oject, we add another key value pair, the key is 'set'
 * which is a special keyword in JS and value is function (value) {}
 * this function takes an argument called 'value'.
 */

/**
 * RECAP:
 * Use 'Object.defineProperty' getters and or setters.
 */
