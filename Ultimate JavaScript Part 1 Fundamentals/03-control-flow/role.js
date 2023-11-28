
let role;

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;
  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}

// Take Away

/**
 * With switch and case, we can compare the value of a variable,
 * against a bunch of other values
 */

// NB

/**
 * Using Booleans in switch and case, is less common.
 * Because if you're comapring the value of a variable with true or false,
 * it makes more sense to use  an if statement.
 */


// Implement the same exact concept with if statement

if (role === 'guest')  console.log('Guest User');
else if  (role === 'moderator') console.log('Moderator User');
else  console.log('Unknown User');