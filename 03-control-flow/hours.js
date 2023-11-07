
// Hour 
// If Hour  is between  6am and 12am: Good morning!
// If it is between 12pm nad 6pm: Good afternoon!
// Otherwise: Good evening!

let  hour = 20;

if (hour >= 6 && hour < 12)
  console.log('Good morning!');
else if (hour >= 12 && hour < 18)
  console.log('Good afternoon');
else
  console.log('Good evening!');
