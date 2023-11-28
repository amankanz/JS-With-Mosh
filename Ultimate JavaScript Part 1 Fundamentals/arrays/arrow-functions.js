
// Arrow-functon
// Whenever we wanna pass a function as a predicate or callback
// function, as an argument for a different method. 
// We use the arrow function syntax

// Finding Reference types
const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
];


const course = courses.find(course => course.name === 'a');

console.log(course);