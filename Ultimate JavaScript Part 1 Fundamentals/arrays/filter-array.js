
const numbers = [1, 2, 3];

// use the filter() method, to return only the elements
// that matches our criteria
const positiveNumbers = numbers.filter(number => number >= 0);
// const numberAtIndex0 = nunbers.filter(number => number === indexOf())

console.log(positiveNumbers);

// when filter() is called, it loops through the original array
// and execute the predicater or callback function
// for each number, if an element matches our criteria
// it will add this element to a new array, and return the new array.


// === CODEWARS Kata
const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }, { firstName: 'Amani', lastName: 'Z.', country: 'Italy', continent: 'Europe', age: 24, language: 'JavaScript' }
];

const devList = list1.filter(obj => obj.continent === 'Europe' && obj.language === 'JavaScript').length;

console.log(devList);
