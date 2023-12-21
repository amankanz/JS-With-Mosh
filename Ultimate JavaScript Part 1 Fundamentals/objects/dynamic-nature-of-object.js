
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

  const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}, 
{
  question: "What does the American Declaration of Independence Act states?",
  choices: ["xxxxxx", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0
}];



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
questions.forEach(q => q.usersAnswer = null)

console.log(questions);
