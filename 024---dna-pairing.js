/* Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, 
and return the results as a 2d array.

Base pairs (http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. 
Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays
are grouped into one encapsulating array.
*/


// Thoughts
/*
We have a string as an input
We have to output a 2d array so we will definitely do some splitting on the `str` input
Reading about the base pairs, if we come across a certain character, we will have to 
pair it with its partner into an array
We can then push them into an array
We can do if else statements or maybe a switch
Make sure to return the array which all the sub arrays are pushed into
*/

function pairElement(str) {
  let pairs = [];
  str.split('').map(elem => {
    if (elem === 'G') {
      pairs.push(['G', 'C'])
    }
    else if (elem === 'C') {
      pairs.push(['C', 'G'])
    }
    else if (elem === 'A') {
      pairs.push(['A', 'T'])
    }
    else if (elem === 'T') {
      pairs.push(['T', 'A'])
    }
  })
  return pairs;
}

function pairElement(str) {
  let pairs = [];
  const strArr = str.split("");
  strArr.map(elem => {
    switch (elem) {
    case 'C':
      pairs.push(['C', 'G']);
      break;
    case 'G':
      pairs.push(['G', 'C']);
      break;
    case 'A':
      pairs.push(['A', 'T']);
      break;      
    case 'T':
      pairs.push(['T', 'A']);
      break;
    }
  })
  return pairs;
}  

pairElement("GCG");



// TESTS
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].