
/**
 * write a function called countOccurences that takes in
 * an array and a searchElement
 * and return the numbers of times that searchElement has
 * occured in this array
 */

// Start of code
// pseudocode
  // create a function called countOccurences
  //the function takes in two paramter
  // array and searchElement
  // iterate through the array
  // create a count variable set to 0
  // each time searchElement is encoutered in the array 
  // increment count by 1
  // return count

  const numbers = [1, 2, 3, 4];

  const count = countOccurences(numbers, 1);

  function countOccurences(array, searchElement) {
    // Basic Emplimation
      // let count = 0;

      // array.forEach(element => {
      //   if (element === searchElement)
      //     count += count + 1;
      // });

      // return count;

    // Using the reduce() method
    return array.reduce((accumulator, current) => {
      const occurence = (current === searchElement) ? 1 : 0;
      console.log(accumulator, current, searchElement);
      return accumulator + occurence;
    }, 0)
  }

  console.log(count);
// End of code
