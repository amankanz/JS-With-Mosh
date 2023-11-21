
/**
 * write a function called arrayFromRange
 * This function should take two parameter min and max.
 * When the program is runned, we should get and array, and in this array
 * we have numbers for instance 1 to 4, the function should display
 * numbers from 1 to 4.
 */

// Start of code

// Pseudocode
//    create a function called arrayFromRange with two parameter
//    declare a variable output with an empty array
//    print all number from min to max 
//    for each iteration add those number to the output array
//    then return output 


const arrayFromRange = (min, max) => {
  let output = [];

  for (let i = min; i <= max; i++) 
    output.push(i);
    
  return output;
};

const numbers = arrayFromRange(-10, -4);

console.log(numbers);


// End of code
