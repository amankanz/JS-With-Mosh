
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(number => number >= 0);

// console.log(filtered);

// we can use the map() method, to map each elemet in an array
// to something else
// map() method, recieve a predicate or callback function, just like 
// the function we passed to the filter method, can have three parameter
// value, index and array

// this example we map numbers to strings
// const items = filtered.map(number => '<li>' + number + '</li>');
// console.log(items);

// // use the join() method to join this array items and create a string
// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

// mapping to object
const items = filtered.map(number => ({value: number}));
// console.log(items);

// One lasting, both the filter() and map() method return an new array
// these methods are chainable, meaning we can call them one after another in a chain

// chaining
// calling one method, which return a result,
//  now we're immediately calling the map method on that result. 
// const items = numbers
//   .filter(number => number >= 0)
//   .map(number => ({value: number})) // returns a new array
//   // call the filter() on that array
//   .filter(obj => obj.value > 1) // new array
//   // call the map() on that array
//   // mapping to a number
//   .map(obj => obj.value);

// console.log(items);

// === CODEWARS Kata ===
// == Method 2 solved using mapping-array
const array = [['white', 'goodness'], ['bleu', 'peace'], ['red', 'influence'], ['Green', 'nature']];

function colourAssociation(array) {
  return array.map(element => ({[element[0]]: element[1]}));
}

// console.log(colourAssociation(array));

// === CODEWARS Kata 2 ==
/**
 * Coding Meetup #5 - Higher-Order Functions Series 
 * - Prepare the count of languages
 */

// const list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];


// function countLangues(list) {
//   const countJS = list.filter(dev => dev.language === 'JavaScript').length;
//   const countRuby = list.filter(dev => dev.language === 'Ruby').length;
//   const countC = list.filter(dev => dev.language === 'C').length;

//   const obj = {};
//   obj['C'] = countC;
//   obj['JavaScript'] = countJS;
//   obj['Ruby'] = countRuby;

//   console.log(obj);
// }

// console.log(countJs);
// console.log(countRuby);
// console.log(countC);

// countLangues(list1);

// const countLanguages = list1.filter(numberLanguage => numberLanguage.language).length;

// console.log(countLanguages);




