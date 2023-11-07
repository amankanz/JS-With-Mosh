
/**
 * Write a function that takes two parameter width and height
 * of an image, the name of the function should be isLandscape.
 * The function should return true if the image is landscape
 * means width is greater than height otherwise 
 * it returns false.
 */

// Write code here

// Method one
// let img = isLandscape(12, 12);
// console.log(img);

// function isLandscape(width, height) {
//   if (width > height) return true;
//       return false;

// }

// Method two
// let image = isLandscape(43, 30);
// console.log(image);

// function isLandscape(width, height) {
//   return (width > height) ? true : false;
// }


// Method three
let image3 = isLandscape(320, 220);
console.log(image3);

function isLandscape(width, height) {
  return (width > height);
}
// End of code