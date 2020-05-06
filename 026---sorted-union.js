/* Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final 
array should not be sorted in numerical order.

Check the assertion tests for examples.
*/


// THOUGHTS
/*
Our input is a 2d array, we have to return an array
We have to use the arguments object to access all the sub arrays
Once we have that, we can just loop through them and check if they are in the new array
We can check using `indexOf()`. If it isn't in there yet, we can `push()`
Then return the new array
*/

function uniteUnique(arr) {
  const arrArgs = [...arguments];
  const union = [];
  for (let i = 0; i < arrArgs.length; i++) {
    for (let j = 0; j < arrArgs[i].length; j++) {
      if (union.indexOf(arrArgs[i][j]) == -1) {
        union.push(arrArgs[i][j])
      }
    }
  }
  return union
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// TESTS
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].