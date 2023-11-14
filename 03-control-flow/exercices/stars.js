
/**
 * create a function called showStars that print
 * stars to the screen
 * the functin takes in a parameter rows which determines
 * the number of stars and lines to be printed. 
 * on row one print one star, on row 2 prints two stars and so on.
 */

// Start of code
// Pseudocode
// write a function showStars that takes in a parameter rows
// print newline based on the parameter rows
// on each line print stars corresponding to the line you are on

// function showStars(rows) {
//   let star = '';

//   for (let i = 1; i <= rows; i++) {
//     // console.log('*');
//     for (let s = i; s <= i; s++) {
//       star += '*';
      
//     }
//     console.log(star);
    
//   }

// }

// showStars(1);


// Mosh's solution
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*';
      
    console.log(pattern);
    
  }
}
showStars(3);
// End of code