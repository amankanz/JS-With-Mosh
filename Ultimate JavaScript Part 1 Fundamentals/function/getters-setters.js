
// Getters and Setters
// const person = {
//   firstName: 'Amani',
//   lastName: 'Zihalirwa'
// };

// console.log(`${person.firstName} ${person.lastName}`);

// Another Approach
// const person = {
//     firstName: 'Amani',
//     lastName: 'Zihalirwa',
//     fullName() {
//       return `${person.firstName} ${person.lastName}`;
//     }
// };

// console.log(person.fullName());

// Another Approach setting the person his full name
// from outside

// Getters, are used to access properties in an object
// Setters, are used to change or mutate the properties
const person = {
  firstName: 'Amani',
  lastName: 'Zihalirwa',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'John Smith';

console.log(person);

