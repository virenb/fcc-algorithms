/* Basic Algorithm Scripting: Mutations

Return true  if the string in the first element of the array contains all of
the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello"
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters 
in "line" are present in "Alien".

*/


// Thoughts
/*
Our input is an array, containing two strings
We can access them by index, [0] and [1]
we have to check if all the characters in the second string are in the first string
We will return a boolean, true or false
I first made two variables with each string and lowercased them 
Since we want to check the second strings characters, i split that into an array
'Hello'.toLowerCase() -> 'hello'.split('') == ['h','e','l','l','o']
We can now loop through this string array and compare with first string
there is a string property, indexOf(). If the character is not in the string
it'll return a -1.
so within the for loop, we can make an if statement to check on the true/false
i created a bool variable to set the boolean value
if we loop and the first letter of the second string isn't in the first word
we can set bool = false and then there is a return so it exits
if all the characters are in the first string, there is an else statement
setting bool to true
*/

function mutation(arr) {
  let bool;
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase().split('');
  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) == -1) {
      bool = false;
      return bool;
    }
    else {
      bool = true;
    }
  }
  return bool;
}

mutation(["hello", "hey"]);

// TESTS
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
// mutation(["ate", "date"] should return false.
// mutation(["Tiger", "Zebra"]) should return false.
// mutation(["Noel", "Ole"]) should return true.