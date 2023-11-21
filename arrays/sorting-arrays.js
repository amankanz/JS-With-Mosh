
// const numbers = [2, 3, 1];

// sort() method convert each elemet inside the array
// to a string then sorts the elements in the array
// numbers.sort();
// console.log(numbers);

// reverse() method
// another method companion to the sort() method
// we use it to reverse the order of elements in the array
// numbers.reverse(); 
// console.log(numbers);


// these two method when having numbers and strings in the array.

// Having Objects in the array
// Set this array by the name of course
// let's Js come first
const courses = [
  {id: 1, name: 'Node.js'},
  {id: 2, name: 'javaScript'}
];

// The sort() method optionaly takes an argument and that's a function
// that is used for comparison
// when the sort() method is called in our code, it gets two objects in our array.
// let's say a and b and compares them
// if they are in the right order it will skip to the next elements
// otherwise it is going to rearrange them.
courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1 
  // a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
})

console.log(courses);
