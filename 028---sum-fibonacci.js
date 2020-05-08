/* Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that 
are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. The first six numbers
of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
than or equal to 10 are 1, 1, 3, and 5.
*/


// THOUGHTS
/*

Our input is an integer, we need to output an integer as well
The two complexities are dealing with fibonacci numbers and also odd numbers
Several ways to go about this, I chose to try a for loop but eventually switched to a while loop
Since fibonacci numbers are the sum of previous numbers, I made an array of the starting ones [1,1]
I declared a count variable in order to loop as well
In the loop, we will add the the two consecutive numbers then push into the array

Once we reach the num limit
We can run a filter method on the array to remove all non odd numbers
Then we can run reduce to sum it 

*/

function sumFibs(num) {
  let fibs = [1, 1];
  let count = 0;
  let fibNums;

  while (num > count) {
    fibNums = fibs[count] + fibs[count + 1];
    
    if (fibNums <= num) {
      fibs.push(fibNums);
    }

    count++;
  }

  return fibs.filter(n => n % 2 !== 0).reduce((a,b) => a + b);

}

sumFibs(4);


// TESTS
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.