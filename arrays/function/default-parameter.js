
// Calculating the total interest
// Add default values for the interest rate and the number
// of years
function interest(principal, rate = 3.5, years = 5) {
  return principal * rate / 100 * years;
}

console.log(interest(10000));
