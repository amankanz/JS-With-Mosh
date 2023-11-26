
const numbers = [1, -1, 2, 3];

// calculate the sum of numbers in the numbers array
// let sum = 0;
// for (const number of numbers) 
//   sum += number;


// console.log(sum);

// Another way, is using the reduce() method
// with the reduce() method we can reduce all the elements within 
// an array to a single value.
// That single value can be a number, string, object or anything

// reduce into a single number
// the reduce() method takes a callback function, with two parameters
// accumulator and currentValue.
//accumulator parameter is something that we initialize and then
//the predicate is executed multiple times, each time the currentValue will be
// set to one element in the array.
// In each call we wanna get the currentValue and add it to the accumulator.
// we simple return the sum of accumulator plus the currentValue
// internaly the reduce() method gets the sum of accumulator plus the currentValue and stores it the accumulator.
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 0);
// As the second method to the reduce() method, we pass the initial value of the accumulator.
// The reduce() method has two parameter, the callback functioon and the initial value for the accumulator  


// const numbers = [1, -1, 2, 3];
// a = 0, c = 1 => a = 1 // first round
// a = 1, c = -1 => a = 0 // second round
// a = 0, c = 2 => a = 2 // third round
// a = 2, c = 3 => a = 5 // last round
// accumulator or sum of all numbers in the array

// When the initial value of the accumulator is omuted
// accumulator's initail value will the first element in the array.
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
  ); 
  
  
  console.log(sum);