/* Intermediate Algorithm Scripting: Drop it

Given the array arr, iterate through and remove each element starting from the
first element (the 0 index) until the function func returns true when the iterated
element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array.

*/


// THOUGHTS
/*
Two arguments, an array and a function
We have to return an array
This is a bit tough, had to re-read directions multiple times.
We do not want to create a new array, work with and return the original
We can't just loop through and push into a new array
We want to remove elements until we hit the first true value
We always want to begin with the first element, so `shift()` will be of use
If we are altering `arr`, we want to save the original lenght in a variable
So we know how many times to loop
We check the first arr[0], if its false then we shift() and remove that
This repeats until we hit a true value
*/


function dropElements(arr, func) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (!func(arr[0])) {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


// TESTS
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].