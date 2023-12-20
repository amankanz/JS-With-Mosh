
const numbers = [3, 4];

// Adding elements to an array we use three methods

// End
numbers.push(5, 6);

// Beginning
// numbers.unshift(1, 2);


// Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);


// === CODEWARS Kata === 
const array = [['white', 'goodness'], ['bleu', 'peace'], ['red', 'influence'], ['Green', 'nature']];

function colourAssociation(array){
  // We <3 colours..
  // Pseudocode
    // Undersatnd the problem
    // Iterate over each subArray
    // Extract elements
    // create an objects
    // Build a result array
    // {white: 'goodness'}
    const result = [];

    for (let subArray of array) {
      const colour = subArray[0];
      const association = subArray[1];
      const obj = {};
        obj[colour] = association;
        
      result.push(obj);
    }

  return result;
}

// === METHOD 2 ===
    // Inside mapping-array section

console.log(colourAssociation(array));
