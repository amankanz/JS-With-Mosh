
const numbers = [1, 2, 3];

// use the filter() method, to return only the elements
// that matches our criteria
const positiveNumbers = numbers.filter(number => number >= 0);
// const numberAtIndex0 = nunbers.filter(number => number === indexOf())

// console.log(positiveNumbers);

// when filter() is called, it loops through the original array
// and execute the predicater or callback function
// for each number, if an element matches our criteria
// it will add this element to a new array, and return the new array.


// === CODEWARS Kata
const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
];

const devList = list1.filter(obj => obj.continent === 'Europe' && obj.language === 'JavaScript').length;

// console.log(devList);

// function numberOfLang(devList) {

//   console.log(devList);
//   const langList = {};

//   for(let list of devList) {
//     // console.log(list);
    
//     for(let dev in list) {
//       // console.log(dev);
//       if(dev === 'language'){
//         // console.log(dev);
//         const languages = list[dev];
//         // console.log(languages);

//         if(langList[languages] === undefined)
//           langList[languages] = 1;
//         else
//           langList[languages] += 1;
//       }
//     }
//   }
//   console.log(langList);
// }

// numberOfLang(list1);


function numberOfLang(list) {
  const countLanguages = {};

  for(let list of list1) {
    for(let dev in list) {
      if(dev === 'language') {
        const language = list[dev];

        // console.log(language);
        if (countLanguages[language] === undefined)
          countLanguages[language] = 1;
        else
          countLanguages[language] += 1;
      }
    }
  }

  console.log(countLanguages);

}

numberOfLang(list1);

const obj1 = [{ firstName: 'Freddy', lastName: 'Z.', country: 'Ghana', continent: 'Europe', age: 24, language: 'Python' }, { firstName: 'Amani', lastName: 'Z.', country: 'Ghana', continent: 'Europe', age: 24, language: 'JavaScript' }];

// function numberOfLang(list) {
//   const langList = {};

//   for (let dev in list) {
//     if (dev.language) {
//       const language = dev.language;

//       if (langList[language]) {
//         langList[language] += 1;
//       } else {
//         langList[language] = 1;
//       }
//     }
//   }

//   console.log(langList);
// }


// function numberOfLang(list) {
//   const langList = {};

//   for (let dev of list) {
//     for (let key in dev) {
//       if (key === 'language') {
//         // console.log(dev[key]);
//         const language = dev[key];
//         console.log(language);

//         // if (langList[language] === undefined) {
//         //   langList[language] = 1;
//         // } else {
//         //   langList[language] += 1;
//         // }
//       }
//     }
//   }

//   console.log(langList);
// }

// numberOfLang(obj1);



