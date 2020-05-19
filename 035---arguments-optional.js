/* Intermediate Algorithm Scripting: Arguments Optional

Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should 
return a function.

Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/


// THOUGHTS
/*
  Confusing problem. We are given at least one input, number or string
  We have to return a number or undefined
  We can turn arguments object into an array. Looking at the tests, it will always be 1-2 args
  We want to sum if all are arguments are numbers
  If there is a string or non number, we want to return undefined
  We can make a function to check if the type is a number otherwise we will return undefined
  We can use a few if/else ifs
  We can first check if there are two arguments, and both numbers, can add them and return that value
  If there is just one argument and its not a number, we will return undefined
  If there is not a second argument, we will return a function (like the instructions),
  passing in a newArg. We will check if that is a number. if so, add it to arg 1
*/


function addTogether() {
  let [arg1, arg2] = arguments;

  function isNum(num) {
    return Number.isInteger(num);
  }

  if (!isNum(arg1)) {
    return undefined;
  }
  else if (isNum(arg1) && isNum(arg2)) {
    return arg1 + arg2;
  }
  else if (!arg2) {
    return function(newArg) {
      if (isNum(newArg)) {
        return arg1 + newArg;
      }
    }
  }

}

addTogether(2,3);

// TESTS
// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.