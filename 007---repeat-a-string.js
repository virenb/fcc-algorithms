/* Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 
 */

// Thoughts
/* 
We start with an if statment to check if num is negative or 0
We will just return an empty string
We cannot use the repeat() method
A for loop should work as we have to repeat num times
We can just create an empty string, loop through num times and add into the new string variable
*/


function repeatStringNumTimes(str, num) {
  let newStr = "";

  if (num <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

// TESTS
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
// The built-in repeat() method should not be used.
// repeatStringNumTimes("abc", 0) should return "".