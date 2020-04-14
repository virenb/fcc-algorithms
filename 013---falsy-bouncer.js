/* Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

 */

// THOUGHTS
/*
We're given an array as input
We want to go through the array and see which values are falsy
The instruction mentions what is falsy (false, null, 0, "", undefined, NaN)
The hint says to convert each item into a Boolean object
You can wrap any value and it will return true or false
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
We can look at the newer array methods instead of a for loop
Usually turn to map() but there is a filter() method
It will return a new array with the values which pass what we propose
This will return only true values
*/

function bouncer(arr) {
  return arr.filter(function (elem) {
    return Boolean(elem);
  })
}

bouncer([7, "ate", "", false, 9]);

// ALTERNATIVE SOLUTION
// Can use an arrow function to shorten the code a little, still pretty clear
/* function bouncer(arr) {
  return arr.filter(elem => Boolean(elem));
}

*/

// TESTS
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].