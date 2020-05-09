/* Intermediate Algorithm Scripting: Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and 
itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than
or equal to num.

*/


// THOUGHTS
/*
Our input, `num`, is an integet
Our output must also be an integer, a sum
We have to loop through all the numbers up to num and sum all the prime numbers
We have to figure out how to check for prime numbers
Our helper function, checks if the number is prime. We loop through numbers starting at 2
We check the divisibility and return a boolean
We then can use the helper function in the main function. Another for loop
If the number is prime, add to the sum
Return sum 
*/

function sumPrimes(num) {
  let sum = 0;
  for (let j = 1; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= (n/2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);


// TESTS
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.