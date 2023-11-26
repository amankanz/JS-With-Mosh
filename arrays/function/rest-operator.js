
// In mordern JS to have a function with
// varying number of parameters
// we can use the rest operator

// Rest Operator

// NB: Spread OPerator vs Rest Operator
// Spread operator, we can spread an array meaning taeking its individual elements
// Rest operator, is used along with paramter of the function

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

// Use the same function to calculate the total costs
// of items in a shopping cart
// with a discount factor
function sum (discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);

  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

