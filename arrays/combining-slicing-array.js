
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// use the concat() method to combine two arrays
// it returns a new array which a combination of the first and second array
// const combined = first.concat(second);

// console.log(combined);

// slice() method, another method opposite from concat()
// used to slice an array into two parts
// one to use it is to pass a zero based index for the start and end
// const slice = combined.slice(3, 5);


// Another way to use the slice() method
// Exclude the second index
// const slice = combined.slice(3);


// Another way, exclude the first and second index
// const slice = combined.slice();

// console.log(slice);


console.log("----------------------------------");
// Reference type

// With both methods if you're dealling with premitive types
// the premitives will be copied into the target array
// but if you've reference type like objects into your array
// the objects themself are not copied their references are copied.
// That means, the elements in both the input, and output arrays will point to the same object.
const first = [{ id: 1 }];
const second = [4, 5, 6]

const combined = first.concat(second);
first[0].id = 10;

console.log(combined);
