/* Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting 
words like "the" and "of".

 */

// Thoughts
/*
Our input is a string or a few strings (sentence)
We have to access each string or every string so it looks like we'll have to use a familiar method of split()
to make an array, where we can loop over every index
If you look at docs, there is a property on strings, toLowerCase() and toUpperCase(), we will need both
They do exactly what they state, convert characters to upper or lower case
Either property will make the whole string lower or upper case, but we only need to make the first character uppercase
Once we have our array, we can loop through, on each item, access the first character with [0], call toUpperCase()
then add the rest of the string to it, with a familiar property, substring(). We will call substring(1) every time
Since the 0th index is capital, we start from the second character (1st index)
We have a new empty array, we can push this new string into the new array then call join(' ') to get back our string(s)
out of the array

ALT SOLUTION
We don't make any new variables or emptry array. We chain a few methods (all the same)
except we use map() instead of a for loop. map() will return us an array so we don't have to make an empty one
and push values into it.
*/

function titleCase(str) {
  let newArr = [];
  let strArr = str.toLowerCase().split(' ');
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i][0].toUpperCase() + strArr[i].substring(1));
  }
  return newArr.join(' ');
}

titleCase("I'm a little tea pot");

// Alternative Solution (using .map(), not declaring any variables)
/*
function titleCase(str) {
   return str.toLowerCase().split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ')
}
*/

// TESTS
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout