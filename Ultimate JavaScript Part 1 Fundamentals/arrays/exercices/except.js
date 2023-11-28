
/**
 * write a function called except that takes two parameter
 * and array and excluded which is also an array
 * and in the excluded we can add values we want to be excluded
 * form the original array.
 * The function should return a new array without the value that we have passed 
 * in elementArray
 */

// Start of code
// Pseudocode 
    // create a function
    // except wiht two parameters:
    // array and excluded(array)
    // declare a variable new empty Array newArray
    // iterating throuh the origin array
    // add the element of the original array into the newArray
    // except the element in the excluded array
    // return newArray
const numbers = [1, 2, 3, 4];

  function except(array, excluded) {
    let newArray = [];

    for (const element of array) 
      if (!excluded.includes(element))
        newArray.push(element);

    return newArray;
  }
 

console.log(except(numbers, [1, 3, 4, 2]));
// End of code
