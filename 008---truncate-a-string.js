/* Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

 */


// Thoughts
/*
We are given two inputs again, a string and a num length to use it against string
If we read the problem carefully, we will only alter string is num is greater
So lets do a quick if statement to check if num is bigger than str.length
If num is bigger, lets just return str
Seems like we can use substring again, but there is also a property called slice()
They are somewhat similar but here are the differences
https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
With either property, we will start with 0 index as the first argument since we want to start at the begining of each string
The second argument, will be num, as it'lll give us the index we want to stop the string at
then we will add the string "..." to this as that is the instruction
*/

function truncateString(str, num) {
  if (num >= str.length) return str;
  return str.substring(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// TESTS
// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".