
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
// numbers.forEach((number, index) => console.log(index, number));

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

// list1.forEach(obj => {
//   for(let keys in obj ) {
//     console.log(obj[keys]);
//     // if(obj[keys] = 'Europe')
//     //   console.log(keys);
//   }

// });




