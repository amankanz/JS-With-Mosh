
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function () {
//     console.log('Draw');
//   }
// };

// circle.draw();
 
/**
 * Create another object circle, can be problematic
 * if we have one or more methods as members.
 * 
 * Object literalls suntax is not a good way to
 * create an object, if the object has atleast one method.
 * 
 * If an object has one or more methods, we say object has behavior.  
 */

/**
 * NB: Creating an object with object literrals syntax is an issue
 * if that object has behavior.
 */ 

// Solution:
// Use a factory or constructor function

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

circle.draw();

