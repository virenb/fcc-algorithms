/* Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these
parameters.

The range will be an array of two numbers that will not necessarily be in 
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 
and 3 that is also evenly divisible by all numbers between 1 and 3. The answer
here would be 6.

*/


// THOUGHTS
/*
A few different ways, can look up LCM or GCD math formulas
The input is an 2 index array. We can run sort() to make the biggest number first
`arr.sort((a,b) => b - a)`
We can create a variable, set to highest value
We can then do some kind of loop through the array to check the divisibility of the multiple
Recursive in a way, if multiple modulus is not equal to zero, add high to multiple
Reset i to low
Return multiple
*/

function smallestCommons(arr) {
  arr = arr.sort((a,b) => b - a);
  let [high, low] = arr;
  let multiple = high;

  for (let i = low; i < high; i++) {
    if (multiple % i !== 0) {
      multiple += high;
      i = low - 1;
    }
    else if (i == high) {
      return multiple;
    }

    return multiple;
  }
}

smallestCommons([1,5]);


// TESTS
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.