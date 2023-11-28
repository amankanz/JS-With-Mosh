
/**
 * Write a function that takes two numbers
 * and returns the maximum of the two.
 */

// Write code her

// Method one
// function maxNumber(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// console.log(maxNumber(3, 3));



// Method two
let number = maxNumber(2, 3);
console.log(number);

function maxNumber(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}

// End of the code