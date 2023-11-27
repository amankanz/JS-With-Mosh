
/**
 * Modify this function and add error handling
 * if the first argument is not an array
 * throw an exception  then
 * wrap these two line with trycatch block:
 * const count = countOccurences(null, 1);
 * console.log(count);
 * 
 * catch the exception and log it on the conole
 */

// Start of code
// Code to be modified
// Pseudocode
  // if the first argument is not an array throw an exceptiuon
  // wrap lines 22, 24 and 25 in trycatch block
  // catch the exception and log it on the console

  try {
    const numbers = [1, 2, 3, 4, 1];
  
    const count = countOccurences(null, 1);
    console.log(count);
  } catch (e) {
    console.log(e.message)
  }

function countOccurences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid Array');

  return array.reduce((accumulator, currentValue) => {
    const occurence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurence;
  })
}


// console.log(Array.isArray(numbers));


// End of code