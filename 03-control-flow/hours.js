
// Hour 
// If Hour  is between  6am and 12am: Good morning!
// If it is between 12pm nad 6pm: Good afternoon!
// Otherwise: Good evening!

let  hours = 10;

if (hours >= 6 && hours <= 12) {
  console.log('Good morning!');
} else if (hours >= 12 && hours <= 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening!');
}