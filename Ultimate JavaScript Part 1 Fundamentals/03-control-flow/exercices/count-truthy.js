
/**
 * // Falsy values in JS
 *    Undefined
 *    null
 *    ''
 *    0
 *    NaN
 * 
 * Create a function called countTruthy that gets
 * an array, and returns the number of truthy value in this array.   
 */

// Start of the code
// create a the function countTruthy with a parameter array
function countTruthy(array) {
  let count = 0;

  for (const value of array) {
    if (value)
        count++;
  }
  return count;
}

const newArray = [null];

console.log(countTruthy(newArray));
// Go through the array checking for non falsy value
// each time a non falsy value is found increament the count variable by one
// then return count varaible
// End of the code