
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(number => number >= 0);

// console.log(filtered);

// we can use the map() method, to map each elemet in an array
// to something else
// map() method, recieve a predicate or callback function, just like 
// the function we passed to the filter method, can have three parameter
// value, index and array

// this example we map numbers to strings
// const items = filtered.map(number => '<li>' + number + '</li>');


// use the join() method to join this array items and create a string
// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

// mapping to object
// const items = filtered.map(number => ({value: number}));

// console.log(items);

// One lasting, both the filter() and map() method return an new array
// these methods are chainable, meaning we can call them one after another in a chain

// chaining
// calling one method, which return a result,
//  now we're immediately calling the map method on that result. 
const items = numbers
  .filter(number => number >= 0)
  .map(number => ({value: number})) // returns a new array
  // call the filter() on that array
  .filter(obj => obj.value > 1) // new array
  // call the map() on that array
  // mapping to a number
  .map(obj => obj.value);

console.log(items);

