
const numbers = [1, 2, 3];

// Use the forof loop to iterate an array
// for (const number of numbers)
//   console.log(number);


// Another method is using the forEach() method
// that takes a predicate or a callback function 
// numbers.forEach(number => console.log(number));

// The callback function passed to the forEach() method
// can optionaly take a second parameter
// that's the index
// we can't get the index with forOf loop.
numbers.forEach((number, index) => console.log(index, number));




