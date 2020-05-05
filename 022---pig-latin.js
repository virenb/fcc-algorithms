/* Intermediate Algorithm Scripting: Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster,
move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English
words in all lowercase.

*/


// Thoughts
/*
We will probably have to use regex for this problem.
We will check check the str against our regex, using `match()`.
If the word begins with a vowel, the above variable will be null and we can just `concat('way')`
If variable is not null, we will use `replace()` to remove the first consonant or cluster
then concat them to to the str, then concat 'ay'
Return str

*/


function translatePigLatin(str) {
  const regex = /^[^aeiou]+/g;
  const consonants = str.match(regex);
  if (consonants == null) {
    str = str.concat('way');
  }
  else {
    str = str.replace(regex, '').concat(consonants).concat('ay');
  }
  return str;
}

translatePigLatin("consonant");


// TESTS
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".