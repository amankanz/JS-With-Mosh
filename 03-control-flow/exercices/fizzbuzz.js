
/**
 * Write a function that takes in a parameter input(number) 
 * the name of the function should be fizzBuzz
 * the function should return Fizz if the number is divisible
 * by 3, return Buzz if the number is divisible by 5, 
 * return FizzBuzz if the number is divisible both by 3 and 5,
 * return input if the number is not divisible by 3 or 5
 * and finaly return a string 'Not a number' if we pass in
 * a value other than a number.
 */

// Write code here

// Method one
// function fizzBuzz(input) {
//   if (input % 15 === 0) {
//     return 'FizzBuzz';
//   } else if (input % 5 === 0) {
//     return 'Buzz';
//   } else if (input % 3 === 0) {
//     return 'Fizz';
//   } else if (input % 15 !== 0) {
//     return input;
//   } else
//     return 'Not a number';
  
// }

// console.log(fizzBuzz('2'));

// Method two
function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return NaN;
  }

  if (input % 15 === 0) {
    return 'FizzBuzz';
  }

  if (input % 5 === 0) {
    return 'Buzz';
  }

  if (input % 3 === 0) {
    return 'Fizz';
  }

  if (input % 15 !== 0) {
    return input;
  }
}

console.log(fizzBuzz(false));
// End of code