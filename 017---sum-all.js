/* Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those
two numbers plus the sum of all the numbers between them. The lowest
number will not always come first. 

For example, sumAll([4,1]) should return 10 because sum of all the
numbers between 1 and 4 (both inclusive) is 10.

*/

/* THOUGHTS
We have some new array methods we can try to use (reduce, filter, map, sort)
It looks like we'll have to get the values between the two integers in the array
Eventually return one integer, a sum of all the values
It will make sense to order the array, high to low so we can call `.sort()` on the `arr`
I'll now make a for loop, declaring i as the smaller value in the array and keep pushing
the values inbetween the two numbers into a new array we created
We now have all the range of numbers we want to add together in `fullArr`
We can use a newer method, `reduce()` to sum all the values together
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
We return the `sum` variable
*/


function sumAll(arr) {
  let fullArr = [];
  arr.sort((a,b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }
  let sum = fullArr.reduce((acc, currVal) => {return acc + currVal}, 0);
  return sum;
}
  
sumAll([1, 4]);

// TESTS
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

