/* Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a two-dimensional array.

*/

// Thoughts
/*
Our input is an array and a number
Our output must be a two-dimensional array 
We have to make arrays within our given array, based on the size argument
We will have to cycle through the array, I will use a for loop
We will use splice() to remove elements from the array and put into a new array
then have to insert the newly created arrays back into the original array (arr)
we will set variable, i, to zero and loop until it reaches the arr.length
we will call splice with splice(i, size) as size is the value of how big
our new arrays should be
we will then take those newly formed arrays and insert into the front of arr
using unshift()
Using console log a lot to check what is in each array
once the for loop is finished, our arr is actually backwards so we can return
arr.reverse() to get the desired order
Each loop, it will take the next index, slice two elements, then add in front
as an array of the size variable
*/

function chunkArrayInGroups(arr, size) {
  for (let i = 0; i < arr.length; i++) {
    let toSplice = arr.splice(i, size);
    arr.unshift(toSplice);
  }
  return arr.reverse();
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// TESTS
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]}}}}}}}