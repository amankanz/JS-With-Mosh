
// Factory or Constructor function

// Factory function produces objects
// function createCircle(radius) {
//   return {
//     radius: radius,
//     draw: function () {
//       console.log('Draw');
//     }
//   };
// } 

// In mordern JS if our keys and values are the same, we make the code shorter by removing the value by removeing the value
// We can also drop the function keyword inside of an object
function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log('Draw');
    }

  };
} 

const circle1 = createCircle(1);

console.log(circle1);
console.log(circle1.draw());

const circle2 = createCircle(2);

console.log(circle2);