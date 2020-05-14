/* Intermediate Algorithm Scripting: Binary Agents

Return an English translated sentence of the passed binary string.
The binary string will be space separated.

*/


// THOUGHTS
/*
Our input is a string (sentence) of binary items
We need to output a string, converting the binary to alphabets
Like other problems, we can `split(' ')` the `str` into an array
There is a string method, `fromCharCode()` we will use
fromCharCode() will convert the digits to letters
We will also use parseInt() on each item in the array, converting from radix 2
`parseInt(binaryItem, 2)`
All of this can be chained together
Then join() back into a string, we have an sentence in English
*/

function binaryAgent(str) {
  return str.split(' ')
            .map(b => String.fromCharCode(parseInt(b, 2)))
            .join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// TESTS
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"