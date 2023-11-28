
/**
 * Create a function called sum, that takes in a parameter called limit.
 * the function must return the sum of all the multiples of 3 and 5
 * from 0 up to the limit(parameter)
 */

// Start of code
// Pseudocode 
// Multiple of 3 and 5 between 0 and 10
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

// create a function sum that a parameter limit
// print all the mulplites of 3 and 5 up to the limit
// stores them in varaible muliplesOf3 and multiplesOf5
// then return the sum of multiplesOf3 plus multipleOf5

// function sum(limit) {
//   let multiplesOf3 = 0;
//   let multiplesOf5 = 0;

//   for (let i = 0; i <= limit ; i++) 
//     if (i % 3 === 0)
//       multiplesOf3 += i;
//       // console.log(multiplesOf3);

//   for (let f = 0; f <= limit; f++)
//     if (f % 5 === 0)
//       multiplesOf5 += f;
//       // console.log(multiplesOf5);

//   return multiplesOf3 + multiplesOf5;
  
// }

// Mosh's solution
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) 
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
 
  return sum;
} 

console.log(sum(10));
// End of code