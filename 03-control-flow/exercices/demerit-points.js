
/**
 * Write a function that takes in a parameter the speed
 * of car.
 * The name of the function should be checkSpeed.
 * Assuming the speed limit is 70 Km an hour.
 * If the car is driving at 70 Km an hour or 
 * under the speed limit the function 
 * should return a string 'Ok'.
 * For every 5 Km an hour  above the speed limit the function
 * should return 'Point: 1' otherwise the function returns 'Ok'
 *  If the driver gets more than 12 points, their lincense
 * should be suspended
 */

// Write code here

function checkSpeed(speed) {
  // let point = 0;
  
  // if (speed >= 75) {
  //   point = point + 1;

  //   return `Point: ${point}`;
  // }

  // if (speed < 75) {
  //   return 'Ok';
  // }

  // while (speed >= 75) {
  //   point = point + 1;
  //   break;
  // }
  
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    console.log('Point:', points);

    if (points >= 12) {
      console.log('Lincese suspended.')
    }
  }

  
}

console.log(checkSpeed(900));
// End of code