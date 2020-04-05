/* Basic Algorithm Scripting: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

 */


// Thoughts
/*
-Objective: Reverse a given string
-You are given the string as an argument
-There are a few built in properties and methods which can be used
-Length comes to mind, which is a property of a string
-There is a reverse() method but that is for an array
-Looking at documentation, you can separate a string into an array
-Another possible solution is to use the length of the string, loop through each character
*/

// To convert a string into an array, use split()
// The split() method divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.
// We now have an array of ['h', 'e', 'l', 'l', 'o']
// We are half way there, we now can call the reverse method
// We now have ['o', 'l', 'l', 'e', 'h'], we just need to get this back to a string
// Call join() but include join('') as no separator will return a string with commas

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative Solutions
/* More verbose way would be to use a loop
Similar as we will involve an array, but use a for loop to go through the string and 
push each character into the array. Then eventually use join('') again to combine the
array.

function reverseString(str) {
  let strArray = [];
  for (let i = str.length; i >= 0; i--) {
    strArray.push(str[i]);
  }
  return strArray.join('');
}

*/

reverseString("hello");

// TESTS
// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".
// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
