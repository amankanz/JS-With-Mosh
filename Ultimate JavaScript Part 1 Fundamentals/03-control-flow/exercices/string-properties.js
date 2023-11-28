
/**
 * Create a function named showProperties, that takes in an object
 * then display all the properties of the object that
 * are of type string
 * the function should return nothing
 */

// Start of the code
// Pseudocode
// Create a function showProperties that take in a parameter obj
// etarate through the the object
// if type of property is string then display the property to the screen.

function showProperties(obj) {

  for (let property in obj) 
      if (typeof obj[property] === 'string')
      console.log(property, obj[property]);
}


const music = {
  title: 'Jaja',
  releasedDate: 3,
  author: 'Juno Kizigenze',
  rating: 4.5
}

console.log(showProperties(music));
// End of the code