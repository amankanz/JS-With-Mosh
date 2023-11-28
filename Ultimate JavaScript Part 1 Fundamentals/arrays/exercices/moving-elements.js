
/**
 * write a function called move, to move an element in an array
 * the function has three parameter:
 * array, index and offset
 * For instance move the first element in the numbers array
 * we pass 0 as index and  1 as an offset 1 moves 1 position to the right
 * If you pust an offset bogger than the lenght of the array
 * the function display an error message "Invalid offset."
 * The offset can either be a negative number or positive.
 * 
 */

// Start of code

// Pseudocode
  // create a function move with parameter:
  // array, index, offset
  // declare a new empty object newArray
  // iterate throught the array 
  // add all the element of the original array into the newArray
  // with the index element place to its offset position
  // if the offset is bigger the lenght or the array 
  // display an error message

  // function move(array, index, offset) {
  //   const newArray = [];

  //   for (const element of array) 
  //     // newArray.push(element);
  //     newArray.splice(offset, 0, element)
  
  //   return newArray;
  
  // }

  // console.log(move(numbers));
  
  // Solution
  const numbers = [1, 2, 3, 4];

  const output = move(numbers, 1, -2);

  console.log(output);
  
  function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
      console.error("Invalid offset");
      return;
    }

    // copy the original array
    const output = [...array];

    // remove the elemet from the array
    // get that element then place it back
    // in the array at a given position
    const element = output.splice(index, 1)[0];

    // Add the removed element back to the array at given position
    output.splice(position, 0, element);

    return output;
  }
  
// End of the code