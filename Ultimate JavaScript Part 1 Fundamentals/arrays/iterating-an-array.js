
const numbers = [1, 2, 3];

// Use the forof loop to iterate an array
// for (const number of numbers)
//   console.log(number);


// Another method is using the forEach() method
// that takes a predicate or a callback function 
// numbers.forEach(number => console.log(number));

// The callback function passed to the forEach() method
// can optionaly take a second parameter
// that's the index
// we can't get the index with forOf loop.
numbers.forEach((number, index) => console.log(index, number));

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

// list1.forEach(obj => {
//   for(let keys in obj ) {
//     console.log(obj[keys]);
//     // if(obj[keys] = 'Europe')
//     //   console.log(keys);
//   }

// });


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

/**
 * Pseudocode:
 *    Iterate through the array element accing the objs
 *    Iterate through the object properties
 *    Print only the age property
 *    create a variable ageGroups stores all the ages in the obj
 */

// for(let dev of list3) {
//   // console.log(dev);

//   for(let keys in dev) {
//     if(keys === 'age') {
//       // console.log(keys);
//       const ageGroup = dev[keys];
//       // console.log(ageGroup);
//       if(ageGroup > 0 && ageGroup < 199) {
//         console.log(true);
//       } else {
//         console.log(false);
//       }
//     }
//   }
// }

// function isAgeDiverse(list) {
//   // Flags
//   let hasTeens,
//     hasTwenties,
//     hasThirties,
//     hasForties,
//     hasFifties,
//     hasSixties,
//     hasSeventies,
//     hasEighties,
//     hasNineties,
//     hasCentenarian = false;

//   for(let dev of list) {
//     // console.log(dev);
  
//     for(let keys in dev) {
//       if(keys === 'age') {
//         // console.log(keys);
//         const ageGroup = dev[keys];
//         // console.log(ageGroup);
//         if(ageGroup >= 10 && ageGroup < 200) {
//           // console.log(true);
//           // return true;
//           if(ageGroup >= 10 && ageGroup < 20) hasTeens = true;
//           else if( ageGroup >= 20 && ageGroup < 30) hasTwenties = true;
//           else if(ageGroup >= 30 && ageGroup < 40) hasThirties = true;
//           else if(ageGroup >= 40 && ageGroup < 50) hasForties = true;
//           else if(ageGroup >= 50 && ageGroup < 60) hasFifties = true;
//           else if(ageGroup >= 60 && ageGroup < 70) hasSixties = true;
//           else if(ageGroup >= 70 && ageGroup < 80) hasSeventies = true;
//           else if(ageGroup >= 80 && ageGroup < 90) hasEighties = true;
//           else if(ageGroup >= 90 && ageGroup < 100) hasNineties = true;
//           else if(ageGroup >= 100 && ageGroup < 200) 
//             hasCentenarian = true;
//         }
//       }
//     }
//   }
//   if(hasTeens && hasTwenties && hasThirties && hasForties && hasFifties && hasSixties && hasSeventies && hasEighties && hasNineties && hasCentenarian)
//     // return true;
//     console.log(true);
//   else
//     // return false
//     console.log(false);
  
// }

// isAgeDiverse(list3);






