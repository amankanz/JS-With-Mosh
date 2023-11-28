
let numbers = [1, 2, 3, 4];
let another = numbers; // referencing to the same object [1, 2, 3, 4]

// There are few solutions to empty an array

// solution 1 (RECOMMENDED)
// works if you do not have multiple references to the original array.

// Reasign to a new array
// numbers = [];

// However the old array is still in the memory
// If there is no other references, to this object
// eventually it will be removed by the garbage collector

// Solution 2 (RECOMMENDED)
// set the lenght property to 0, will truncate the array.
// I
// numbers.length = 0;


// It doesn't matter how many references you have to that array
// the original array is truncated


// Solution 3
// use the splice() method
// numbers.splice(0, numbers.length);



// Solution 4
// use the pop() method
while (numbers.length > 0)
numbers.pop();

console.log(numbers);
console.log(another);

