/* Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array (first argument) and returns the first
element in the array that passes a truth test (second argument). If no element passes
the test, return undefined.

 */


// Thoughts
/*
This problem is a little odd, in my opinion
We have two inputs, an array as first argument and second argument is a function 
Right now, I am not too worried about the second argument
The instruction mentions looks through an array, so we need to loop through the first argument
In the loop, we can use an if statement to check each value in the array against the function
We only have to return the first element that passes the if statement
We can use a return statement to end the if statment once we have our first success
We have been given a num variable, change the declaration so it doesn't have a value (currently at 0)
so we can set the first successful array value to num, Return num
If none of the array's values pass the function test, we will return num (as it will
remain undefined)
*/

function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// TESTS
// findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }) should return undefined.