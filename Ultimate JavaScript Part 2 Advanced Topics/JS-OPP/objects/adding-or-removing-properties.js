
// Circle Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Draw');
  }
}

const circle = new Circle(1);

// console.log(circle);

/**
 * With constructor function, we creaate an object 'circle'
 * and objects in JS are dynamic.
 * Meaning, after you create them we can add extra properties and delete
 * some properties.
 */

// Adding an new property to circle object
// circle.location = { x:1 };

// console.log(circle);

// Another notation for accessing properties in {}
// Breaket Notation
circle['location'] = { x: 1 }; // use a string to reference the property

console.log(circle);

/**
 * The dot-natation is simpler but the breaket notation
 * is useful in certain scenario
 */

// For example you want to dynamically access a property name.
// const propertyName = 'location';

/**
 * we have it somewhere in our application, now we want to access
 * the location property of a circle.
 * If we are dealing with this const propertyName = 'location'; dynamically
 * at a time of writing the code, we don't know what is the name of that property
 * That is calculated at a run time.
 */
// we use the breaket notaion
// circle[propertyName] = { x: 1 };

/**
 * Another use case for using breaket notation
 * is when you are using the property names that are not
 * valid identifiers
 */
// For example
// const propertyName = 'center-location';
// to access this property we use the breaket notation
// circle[center-location] = { x: 1 };

// Delete a property from an object
// delete circle.location; // use the delete operator then reference the property name, use dotnoation 

/**
 * Use case:
 * when getting a user object from the database, and want to return it to
 * the client. But may be the user object has certains properties we don't
 * wanna send to the client. Like you want to send the password, the credit
 * card info.
 * This case we will dynamically delete one or moe properties from the object.
 * 
 * We use the delete operator and hen refernce the property name
 * we can use the dotnation or the breaket notation.
 */

// delete circle['location']; // use the breaket notation  
// console.log(circle);

