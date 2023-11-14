
/**
 * Create a function that calculate the grade of a student
 * the name of the function should be calculateGrade
 * that takes a paramter called marks, that take an array of marks
 * then the function calculate the avarage grade of marks
 * if the average is between 
 * 1 - 59: the grade should be F
 * 60 - 69: D
 * 70 - 79: C
 * 80 - 89: B
 * 90 - 100: A
 * the function must return whether grade: A, B, C, D, or F
 * base on the average marks. 
 */

// Start of code
// Pseudocode
// write a function calculateGred that take a parameter marks which is an array of marks.
// calculate the sum of all the keys inside the array
// store the sum inside a varaible sumMarks
// then calculate the avarage of all the keys inside the arsay 
// the evaluate the avarage number if is btwn 1 - 59, 60 -69
// 70 - 79, 80 - 89 and 90 - 100
// the function should return  grade D, C, B, or A

// function calculateGrade(marks) {
//   let sumMarks = 0;

//   for (let index of marks) {
//     sumMarks += index;
//   }

//   let averageGrade = sumMarks / marks.length;

//   if (averageGrade >= 1 && averageGrade <= 59)
//     return 'Grade is F';
//   if (averageGrade >= 60 && averageGrade <= 69)
//   return 'Grade is D';
//   if (averageGrade >= 70 && averageGrade <= 79)
//     return 'Grade is C';
//   if (averageGrade >= 80 && averageGrade <= 89)
//   return 'Grade is B';
//   if (averageGrade >= 90 && averageGrade <= 100)
//   return 'Grade is A';
// }

// console.log(calculateGrade([80, 80, 50]));

// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A
  
// Mosh;s solution
// function calculateGrade(marks) {
//   let sum = 0;

//   for (let mark of marks) 
//     sum += mark;

//   let average = sum / marks.length;

//   if (average < 60) return 'F'
//   if (average < 70) return 'D'
//   if (average < 80) return 'C'
//   if (average < 90) return 'B'
//   return 'A';  
// }

// console.log(calculateGrade([7, 7, 13]));

// Another Method
// with sinlge responsibility
function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return 'F'
  if (average < 70) return 'D'
  if (average < 80) return 'C'
  if (average < 90) return 'B'
  return 'A';  
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) 
    sum += value;

  return sum / marks.length;
}



// End of code