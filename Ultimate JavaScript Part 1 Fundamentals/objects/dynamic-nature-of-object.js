
// In JS, objects are dynamic which means once you create them you can always  add new properties or methods, or remove the existing ones

// We can not reassign this object but we can always add or remove its properties.
const circle = {
  radius: 1
}  

circle.color = 'yellow';
circle.draw = function () {
  
}

// delete cicle.color;
// delete circle.draw;

// console.log(circle);

// === CODEARS Kata ===

/**
 * Your task is to add a new property usersAnswer to every object
 * in the array questions. The value of usersAnswer should be set to null. 
 * The solution should work for array of any length.
 */

// Pseudocode
  // Understand the proble: 
  // Access element(obj) of the array
  // Add a new property userAnswer to every element(obj)
  // Set the value of the userAnswer to null

//   const questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }, 
// {
//   question: "What does the American Declaration of Independence Act states?",
//   choices: ["xxxxxx", "At the bottom", "Frankie's Pub", "China"],
//   corAnswer: 0
// }];



// console.log(questions[0].usersAnswer = null);

// function addUsersAnswer() {
//   for (const question of questions) {
//     question.usersAnswer = null;
//   }
// }

// addUsersAnswer();
// console.log(questions);

// === Method 2 ===
// Using forEach() method
// questions.forEach(q => q.usersAnswer = null);

// console.log(questions);

// === CODEWARS Kata 2

/**
 * Create a function strCount (takes an object as argument) 
 * that will count all string values inside an object
 */

// Pseudocode
  // Understand the problem
  // Access the property of the obj
  // check the type of each property
  // 


const obj1 = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4, ''],
  fifth:  null
  }
// console.log(typeof(obj1.first));

// function strCount(obj) {
//   let count = 0;

//   // Iterate over properties in obj
//   for (let props in obj) {
//     if(typeof obj[props] === 'string')
//     count++;

//     if(typeof obj[props] === 'object' && obj[props] != null || undefined) {
//       // console.log(props);

//       // Iterate over property of array
//       for(let element of obj[props]) {
//         if(typeof element === 'string')
//         count++;
//       }
//     }

//   }

//   console.log(count);
// }

// strCount(obj1);

// const keys = Object.keys(obj1);
// console.log(keys);

// console.log(typeof obj1.null);

// obj2 = [{
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
// }]

// for (const property of obj2) {
//   obj2[property].forEach(element => {
//     if(typeof element === 'object')
//       console.log(element);
//   });
  
// }

// obj2.forEach(obj => {
//   console.log(obj);
// });


// for (const key of obj2) {
//   // console log the key in the array
//   console.log(key);

//   // Iterate over the property in the keyObj
//   for (const property in key) {
//     if(typeof key[property] === 'object' && key[property] != null || undefined) {
//       console.log(key[property]);

//       for(let element of key[property]) {
//         if(typeof element === 'string')
//           console.log(element);
//       }
//     }
//   }
// }

// if (typeof key === 'object') {
// }
// console.log(key);

const obj2 = {
  first: '1',
  second: '2',
  third: false,
  fourth: [ 'anytime', 2, 3, 4, '' ],
  fifth: null,
  sixth: undefined,
  seventh: {}
};

// console.log(Object.keys(circle2));
// if('seventh' in circle2)
//   console.log('Circle2 has seventh');

function strCount(obj) {
  let count = 0

  for(let keys in obj) {
    if(typeof obj[keys] === 'string') {
      console.log(keys);
      count++;
    }
    
  }
  
  for(let keys in obj) {
    if(typeof obj[keys] === 'object' && obj[keys] != null) {
      if(obj[keys].length > 0) {
        console.log(obj[keys]);

        for(let element of obj[keys]) {
          if(typeof element === 'string')
            count++;
        }
      }
    }
  }

  console.log(count);
}

strCount(obj2);


// const isArray = [];
// const isObject = {};

// if(typeof isArray === Array)
// console.log('It is an array');

