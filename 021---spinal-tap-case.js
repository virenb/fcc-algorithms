/* Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

// THOUGHTS
/*
Will have to use regex :(
Tried standard split(' ').join('-').toLowerCase() but only works for the white spaces
We will have to create regex for white space and underscores 
Then we will have to deal with the uppercases
The first regex will replace camelcase situations
The second regex replace will take care of the white space and _
Then we can call `.toLowerCase()` on the string
*/

function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_+/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

// TESTS
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".