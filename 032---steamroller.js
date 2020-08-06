/* Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

*/

// THOUGHTS
/*

Read carefully. We are given an array of some subarrays
We must return a flat array (an array without an subarrays)
We cannot use the more modern methods of `.flat()` and `.flatMap()`
Tried some methods like join() to conver to strings but wasn't the way to go
There is an Array method to check if its an array, `Array.isArray()`
We can create an empty array
We will map through `arr`, pushing non arrays into the new empty array
If it is an array, we can use the ... operator to deconstruct the array
A recursive method
Return the new flat array
*/

function steamrollArray(arr) {
  let flattened = [];

  arr.map((val) => {
    if (!Array.isArray(val)) {
      flattened.push(val);
    } else {
      flattened.push(...steamrollArray(val));
    }
  });

  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);

// TESTS
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
