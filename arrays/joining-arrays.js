
const numbers = [1, 2, 3];

// use the join() method to join the elements in the array
// the method receuve an optional argument
// the join() method returns a string
const joined = numbers.join(',');

console.log(joined);

// Another is the split() method
// it goes hand-in hand with the join() method
// though it is not part of an array
// this method returns an array
const message = 'This is my evening practice';
const parts = message.split(' ');

console.log(parts);

// Now, we have an array use the join() method
// to combine the element in the array parts
// to combine these element using a separator
const combined = parts.join('-'); // useful in creatinf URL slug

console.log(combined);


