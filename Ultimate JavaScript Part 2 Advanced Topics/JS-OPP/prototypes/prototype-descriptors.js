
let person = { name: 'Maya' };

// console.log(person);

// for (let key in person) {
//   console.log(key);
// }

// console.log(Object.keys(person));

/**
 * We can't etarate over the properties and methods defined in
 * object base.
 * Because in JS properties have attributes attached to them.
 * sometimes these attributes prevent properties from being enumerated
 */

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);

// Define the properties of person object
Object.defineProperty(person, 'name', {
  // property descriptor object
  // attributes of name property go here
  writable: false, 
  enumerable: true,
  configurable: false
})

delete person.name
console.log(person);

/**
 * By default, all attributes are true, writable, enumerable
 */
