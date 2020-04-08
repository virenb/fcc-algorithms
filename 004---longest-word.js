/* Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

 */


// Thoughts
/*
Input is sentences. Made of strings, there is a property on string types, .length
This is helpful but we need to go through every string in the sentence
Like an earlier problem, it would be a good step to split the strings into an array
Before altering the input, we will set a variable, longest, to 0 to compare longest length
We will call str.split(' ') - space between the quotations so it is split after each word
We now have any array
we can use a loop to go through the array (each string) and check the length against
the longest variable.
If it is longer than the current longest value, we will replace it
Return longest
*/

function findLongestWordLength(str) {
  let longest = 0;
  let strArray = str.split(' ');
  for (let word of strArray) {
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Alternative Solution (using foor loop instead of for .. of)
/* 

function findLongestWordLength(str) {
  let longest = 0;
  let strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= longest) {
        longest = strArray[i].length;
    }
  }
  return longest;
}
*/

// TESTS
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.