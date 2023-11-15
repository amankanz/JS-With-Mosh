
/**
 * create a function named showPrimes, that takes in a parameter limit
 * and shows all the prime numbers up to this limit parameter.
 * 
 */

// Start of code
// Pseudocode
// In mathematics numbers can be:
// Prime or Composite
// Prime number (is a number whose factors are only 1 and itself)

// Composite number
// 12 = 1, 2, 3, 4, 6, 12
// 12 can be divided evenly by its factors

// Prime number
// 11 = 1, 11
// 11 can be divided by one and itself

// create a function showPrimes that takes in a parameter limit
// Print all numbers up the limit parameter
// Print only the numbers that are prime

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
 
}

showPrimes(10);


// Sinlge responsibility Principle
function isPrime(number) {
  for (let factor = 2; factor < number; factor++ ) 
    if (number % factor === 0)
        return false;
    
  return true;
}

// primeFactor(20);

// End of code