
/**
 * create a function called sum
 * that takes a varying number of arguments
 * and returns their sum
 * To challenge yourself modify the sum function
 * to be able to accept  an arrayand still return the same
 * result
 * as part of the challenge you need to detect if the argument
 * pass is an array
 * using Array.isArray() method which return a boolean true
 * if the argument is an array
 */

// Start of code
// Pseudocode:
  // create a function sum that takes in an argument args
  //  and returns their sum
  // Modify the sum function to be able to take in an argument arr
  // and return their sum of array element
  // the program should be able to dectect weither the argument passed
  // is an array

function sum(...args) {
  // challenge 2
  // console.log(args.length);
  // console.log(Array.isArray(args[0]));
  // console.log(args);
if (args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]];

  return args.reduce((a, c) => a + c);
}

console.log(sum([1, 2, 3, 4]));

// End of code
