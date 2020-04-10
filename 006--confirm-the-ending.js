/* Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

 */


// Thoughts
/*
Read the description carefully
DO NOT use .endsWith() method (introducted in ES2015)
TRY to use a substring() method
It is okay to check the documentation of this method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Problem gives us two inputs, the string, and the target string
The string prototype of length will be used
We also want the length of the target string
Reading the docs of substring(), it can take in more than one argument
str.substring(x) x will be the index to start the string from
"Bastian".substring(2) == "stian"
So if we subtract target length from string length, we will get the string from the index we want to compare
*/

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) == target;
}

confirmEnding("Bastian", "n");

// TESTS
// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.