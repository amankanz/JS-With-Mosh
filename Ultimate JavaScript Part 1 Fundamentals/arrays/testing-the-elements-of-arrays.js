
const numbers = [1, -1, 2, 3];

// We have two new methods in modern JS
// called every() and some() very usefull methods.


// Check if numbers in the array are positive

// every() receive a callback function or a predicate
// the callback function has 3 parameter:
// value which is a number because we have an array of numbers, 
// index: which is the index of the value and 
// the array itself.
// when using the function only parameters that you need.

// chech to see if value is positive number
const allPositive = numbers.every(function (value) {
  return value >= 0;
})

// console.log(allPositive);

// every() method, will run evaluating each value in the array till it finds an element which does not match our criterai


// some() method, check if we have atleast one element that matches
// our criteria
const atLeastOnePositive = numbers.some(value => {return value >= 0});

// console.log(atLeastOnePositive);

// every(), checks to see if every element in a given array matches our criteria
// some(), checks to see if we have atleast one element that matches the given criteria

// === CODEWARS KAta 3 ===
/**
 * Your task is to return:
 * true if developers from all of the following age groups have signed up:
 * teens, twenties, thirties, forties, fifties, sixties, seventies, eighties
 * , nineties, centenarian (at least 100 years young).
 * false otherwise.
 */

const list3 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 228, language: 'JavaScript' }
];


function isAgeDiverse(list) {
  const ageGroups = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const isAllGroupsPresent = ageGroups.every(age => {
    // return age > 0 && age < 199 // true
    list.some(dev => dev.age >= age && dev.age < age + 10)
  }
  );

  console.log(isAllGroupsPresent);
}

// Example usage
isAgeDiverse(list3);

// function isAgeDiverse(list) {
//   // Age groups representing the lower bounds
//   const ageGroups = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   // Check if every age group has at least one developer
//   const isAllGroupsPresent = ageGroups.every(age => {
//     // Check if at least one developer in the list satisfies the condition for the current age group
//     const isGroupPresent = list.some(dev => {
//       const isInAgeGroup = dev.age >= age && dev.age < age + 10;
//       console.log(`Developer: ${JSON.stringify(dev)}, Age Group: ${age}-${age + 10}, Is in Group: ${isInAgeGroup}`);
//       return isInAgeGroup;
//     });

//     console.log(`Age Group ${age}-${age + 10} is present: ${isGroupPresent}`);
//     return isGroupPresent;
//   });

//   console.log(`All age groups are present: ${isAllGroupsPresent}`);
// }

// // Example usage
// isAgeDiverse(list3);
