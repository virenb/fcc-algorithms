/* Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

 */

// THOUGHTS
/*
We're given two arrays and an index
Ultimately, we want to insert the first array's values into the second array at the correct index
Looking at the tests, we do not want to alter arr1 or arr2 so we should make a copy
Since we're inserting into second array, we can make a new variable and set it to ...arr2
we can now splice the new variable
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
So the input n is the index we want to start the insert from so that will be our first argument
We do not want to delete any, we want to add from arr1 so the second argument should be 0
the third argument should be arr1 
splice(n, 0, arr1)
If we do this, we get an array inside an array, we do not want that.
We can use the spread operator instead of using arr1 
*/

function frankenSplice(arr1, arr2, n) {
  let newArr2 = [...arr2];
  newArr2.splice(n, 0, ...arr1);
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


// TESTS
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.