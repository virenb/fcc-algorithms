/* Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

 */


// Thoughts
/*
We are dealing with a 2-dimensional array
We have to access values from an array within an array
2 for loops?
There is definitely an array method called sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
If the arrays within the array are sorted, largest to smallest, we can just look for the 0 index (1st element)
We use a for loop to call the sort() method
Within that same for loop, once arrays are sorted, we push only 0th index into the new array
*/

function largestOfFour(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => b - a);
    newArr.push(arr[i][0]);
  };

  return newArr;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// TESTS
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].