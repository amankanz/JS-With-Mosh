
// Try and Catch
// const person = {
//   firstName: 'Amani',
//   lastName: 'Zihalirwa',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// person.fullName = true; 

// console.log(person);

// Defensive Programing
// Adding Error handling at the beginning of a function
// or a method
// To makesure that the value that are comming are valid.
const person = {
  firstName: 'Amani',
  lastName: 'Zihalirwa',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    // Error vs Exception Slightly deference
    // const e = new Error(); // plain JS Object
    // throw e; // Exception (exception situation that should not have happened)

    if (typeof value !== 'string')
    // Error() is constructor function because of the PascalCase
      throw new Error('Value is not a string.');

    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter a firstname and lastname.')

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = ''; 

}
catch (e) {
  // display to the developer
  console.log(e);
}

console.log(person);

// To report an error, we throw an exception
// Throwing an exceptionis a technical term 
// WHen we throw an exception, we also need to catch that exception
// and do something with it like display an error to the user.

