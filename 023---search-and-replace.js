/* Intermediate Algorithm Scripting: Search and Replace

Perform a search and replace on the sentence using the arguments provided
and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are
replacing it. For example if you mean to replace the word "Book" with the word
"dog", it should be replaced as "Dog"

*/


// Thoughts
/*
We have three inputs. A string (sentence), string, and string
We have to replace one string within the sentence with the 3rd argument
We have to check on the case (lower or upper) and ensure it matches
We will use regex again. We will test `before` to see if begins with a capital letter
If it returns true, we will change after to have a capital as well
If not, we will leave that as it is
We split the `str` setence into an array, search for the `before` word using `splice()`
We find the index, remove the word, and insert `after` value
Join back array and return the value
*/

function myReplace(str, before, after) {
  const strSplit = str.split(' ');

  if (/[A-Z]/.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } 
  
  strSplit.splice(strSplit.indexOf(before), 1, after);
  return strSplit.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// TESTS
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".