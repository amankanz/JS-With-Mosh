
// Finding elements depends on whether you are storing
// Primitive or reference types in an array.

// Finding Premitives
const numbers = [1, 2, 3, 1, 4];

// indexOf() method
// return the index of that element in the array
// if the element exist otherwise it returns -1
console.log(numbers.indexOf(1));

// lastIndexOf() method
// return the last index of given element
// or -1 if it doesn't exist
console.log(numbers.lastIndexOf(1));

// All the above have a second parameter called startingIndex()
// index at which the search will begin
console.log(numbers.indexOf(1, 3));

// To see if an element exist inside an array
// console.log(numbers.indexOf(1) !== -1); // output true
console.log(numbers.includes(2));


console.log('-------------------------------------'); // ignore!

// Finding Reference types
const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
];

// find() method
// the find() method receive an argument which is a function
// we call this function a predicate or a callback function
// we use it to determine if the given element exists in  an array or not.
// this function takes a parameter that's an element in the array.
// in the body of the function we return a boolean
// The find() method return the first element that matches our boolean criteria
const course = courses.find(function (course) {
  return course.name === 'a';
});

console.log(course);


// findIndex() Method
// Instrad of returning the actual object, like the course object
// it return its index
// const course = courses.findIndex(function (course) {
//   return course.name === 'a';
// });

// console.log(course);

