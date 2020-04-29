/* Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has to be 
present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and
the second argument is { last: "Capulet" }, then you must return the third object
from the array (the first argument), because it contains the name and its value, 
that was passed on as the second argument.

 */

// THOUGHTS
/*
Our inputs are an array of objects and an object.
We have to check if `source` is in the first argument, `collection`
We have to work with arrays and object methods here
Thought is to check if the key(s) exist in the collection array then check
if the values match
We can use Object.keys to make an array of the keys to check against (from second argument)
We can use `hasOwnProperty()` to see if the key exists in the array
Once we have a keys array, we can loop through that and make the comparsion
We will use `filter()` on `collection` to check if it has the property and then if the value matches
Using `filter()` we will only return the true values
Set arr to `collection.filter(...)`
Return arr
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  arr = collection.filter(function(obj) {
    for (var i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  })
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// TESTS
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []