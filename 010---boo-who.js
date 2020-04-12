/* Basic Algorithm Scripting: Boo Who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

 */


// Thoughts
/*
Read the problem a few times. It was a little confusing
I thought we'd have to check for truthy or falsy values but have a look at the tests
The problem is only asking to check if the argument is a boolean primitive
If it is true or false, not truthy or falsy values
So if argument is false, we return true. If argument is true, we return true. That is it
So we can just check typeof argument, if its a boolean, we return true
Otherwise every other type is false
*/

function booWho(bool) {
  return typeof bool == 'boolean';
}

booWho(null);

// TESTS
// booWho(true) should return true.
// booWho(false) should return true.
// booWho([1, 2, 3]) should return false.
// booWho([].slice) should return false.
// booWho({ "a": 1 }) should return false.
// booWho(1) should return false.
// booWho(NaN) should return false.
// booWho("a") should return false.
// booWho("true") should return false.
// booWho("false") should return false.