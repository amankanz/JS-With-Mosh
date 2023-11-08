
/**
 * Write a function that takes a parameter called limit,
 * the name of the function should be showNumbers.
 * When you call the function with a number like 10,
 * the function should return all the number from 0
 *  to the number you supplied as limit
 * Netx to each number, if the number is even
 *  the function should display the  'EVEN' label otherwise
 * it should display the 'ODD' label
 */

// Write code here

function showNumbers(limit) {
  // Method one
  // for (let i = 0; i <= limit; i++) {
  //   if (i % 2 === 0)
  //     console.log(i, 'EVEN');
  //   else
  //     console.log(i, 'ODD');
    
    
  // }

 // Method two
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }

}


console.log(showNumbers(10));
// End of code