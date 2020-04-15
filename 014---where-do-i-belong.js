/* Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value 
should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it 
is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the
array has been sorted it will look like [3,5,20] and 19 is less than
20 (index 2) and greater than 5 (index 1).

 */

// THOUGHTS
/*
We are given two inputs, an array and a number
We have to return an index, not the whole array, not the number
We need to sort the array from smallest to largest 
There is a sort() method on arrays but lets look into how that works
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
We need to subtract a - b ///// sort((a,b) => a - b)
Our array is sorted, now we need to loop through and see where num should belong
Before we loop we should look at the test cases
if it is an empty array, just return 0 so we can create a quick if statement
We make our for loop on new sorted array, then include an if statement in the loop
to check if num is bigger than a value then smaller than the next one, so we can insert it
once we find its correct place, we can use splice to insert it
splice(index, 0 to remove, num to add in)
then we can return the indexOf(num)
if num is going to be the biggest value, this will not work and we have to add another case
if num is greater than sortedArr[length-1], we can just push() since it will go at the 
end of the array. then return that indexOf()
*/

function getIndexToIns(arr, num) {
  if (arr.length === 0) return 0;

  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (num >= sortedArr[i] && num <= sortedArr[i + 1]) {
      sortedArr.splice(i + 1, 0, num);
      return sortedArr.indexOf(num);
    }
    else if (num > sortedArr[sortedArr.length - 1]) {
      sortedArr.push(num);
      return sortedArr.indexOf(num);
    }
  }
}

getIndexToIns([40, 60], 50);


// TESTS
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
// getIndexToIns([40, 60], 50) should return 1.
// getIndexToIns([40, 60], 50) should return a number.
// getIndexToIns([3, 10, 5], 3) should return 0.
// getIndexToIns([3, 10, 5], 3) should return a number.
// getIndexToIns([5, 3, 20, 3], 5) should return 2.
// getIndexToIns([5, 3, 20, 3], 5) should return a number.
// getIndexToIns([2, 20, 10], 19) should return 2.
// getIndexToIns([2, 20, 10], 19) should return a number.
// getIndexToIns([2, 5, 10], 15) should return 3.
// getIndexToIns([2, 5, 10], 15) should return a number.
// getIndexToIns([], 1) should return 0.
// getIndexToIns([], 1) should return a number.