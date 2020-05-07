/* Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/


// THOUGHTS
/*
First thought of maybe making an object and checking the keys, then would replace would values
We will split our input string into an array
We will loop through it checking each index to see if its equal to one of the special characters
We will replace the index
Join the array back into a string
Return the string
*/

function convertHTML(str) {
  const strSplit = str.split('');
  for (let i = 0; i < strSplit.length; i++) {
    switch(strSplit[i]) {
      case "&":
        strSplit[i] = "&amp;";
        break;
      case "<":
        strSplit[i] = "&lt;";
        break;           
      case ">":
        strSplit[i] = "&gt;";
        break;
      case "'":
        strSplit[i] = "&apos;"
        break;
      case '"':
        strSplit[i] = "&quot;"
        break;       
    }
  }
  
  return strSplit.join('');
}

convertHTML("Dolce & Gabbana");

// Can be solved with if / elses

// TESTS
// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
// convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
// convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
// convertHTML("Schindler's List") should return "Schindler&apos;s List".
// convertHTML("<>") should return "&lt;&gt;".
// convertHTML("abc") should return "abc".