/* Basic Algorithm Scripting: Factorialize a Number

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
 */


// Thoughts
/*
A factorial is basically a number who is multiplied by all other integers
Our input ,num, is an integer (num = 5)
We want to go through integers starting from num, 5, so 5 * 4 * 3 * 2 * 1
Our one gotcha if its a 0, return 1 (as seen in the test) so we can do a quick if statment to check that
We can declare a variable, total, equal to one initially
A while loop can multiply each integer by the total variable then we can subtract one from num input
*/


function factorialize(num) {
  let total = 1;

  if (num == 0) {
    return total;
  }

  while (num > 0) {
    total = total * num;
    num--;
  }

  return total;
}

factorialize(5);


// TESTS
// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.
