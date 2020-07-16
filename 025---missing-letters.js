/* Intermediate Algorithm Scripting: Missing Letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

// Thoughts
/*

We have a string input and we have to return a character or undefined
Looking at the undefined case, we would return that if the input was a string of the whole alphabet
My plan would be to create an alphabet string and `split()` it to have an array of the whole alphabet
Then split the `str` input into an array as well as compare the two
As we do not need to run the str through the whole alphabet, I will take the length of the str
Another integer I will use is the starting index to check where to compare within the alphabet
Will use a loop looping through alphabet and check using `includes()`
If it is not included, will return that character

*/

function fearNotLetter(str) {
  if (str == 'abcdefghijklmnopqrstuvwxyz') return undefined;

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let strArray = str.split('');
  let idx = alphabet.indexOf(strArray[0]);
  let strLen = strArray.length;
  let splicedAlphabet = alphabet.splice(idx, strLen);

  for (let i = 0; i < splicedAlphabet.length; i++) {
    if (!strArray.includes(splicedAlphabet[i])) return splicedAlphabet[i];
  }
}

fearNotLetter('abce');

// Tests
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
