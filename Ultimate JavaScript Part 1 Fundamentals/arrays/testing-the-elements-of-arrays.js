
const numbers = [1, -1, 2, 3];

// We have two new methods in modern JS
// called every() and some() very usefull methods.


// Check if numbers in the array are positive

// every() receive a callback function or a predicate
// the callback function has 3 parameter:
// value which is a number because we have an array of numbers, 
// index: which is the index of the value and 
// the array itself.
// when using the function only parameters that you need.

// chech to see if value is positive number
// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// })

// console.log(allPositive);

// every() method, will run evaluating each value in the array til i finds an element which does not match our criterai


// some() method, check if we have atleast one element that matches
// our criteria
const atLeastOnePositive = numbers.some(value => {return value >= 0});

console.log(atLeastOnePositive);

// every(), checks to see if every element in a given array matches our criteria
// some(), checks to see if we have atleast one element that matches the given criteria