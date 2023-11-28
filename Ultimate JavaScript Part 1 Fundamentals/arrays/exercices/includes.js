
/**
 * write a function like the include() method
 * the function name should be include that takes two parameter
 * array and searchElement
 * if the searchElement exist in array, the function should return true
 * otherwise it should return false 
 */

// Start of code
const numbers = [1, 2, 3, 4];

// Pseudocode
  // create a function include with two parameter:
  // array and searchElemnt
  //  iterate through the array
  // if an element in the array matches the searchElement
  // return a boolean true otherwise return false

function include(array, searchElement) {
  // array.forEach(arrElement => {
  //   if (arrElement === searchElement)
  //     console.log(true);
  //   return false;
  // })  
  for (const element of array) 
    if (element === searchElement)
      return true;
    return false;
  
}

console.log(include(numbers, -2));
// End of code
