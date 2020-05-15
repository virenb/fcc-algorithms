/* Intermediate Algorithm Scripting: Everything Be True

Check if the predicate (second argument) is truthy on all elements of a 
collection (first argument).

In other words, you are given an array collection of objects. The predicate pre 
will be an object property and you need to return true if its value is truthy. 
Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated
in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

*/


// THOUGHTS
/*
We have two arguments as input. An array of objects, and a string.
The string is a key within the objects. We need to output a boolean value, true or false.
We need to check every object's properties, if they have `pre` and then if the value is 
truthy
So if the value is not an empty string, 0, undefined, NaN, null
Luckily JS comes with a built in object, `Boolean`
We can map through the array, checking if the object property exists and if its truthy
or not
Since we are mapping, we'll return an array of T and F
We can just check with `includes()` if there is a false value, then we will return false
*/

function truthCheck(collection, pre) {
  let checkedArr = collection.map(obj => {
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  })

  return checkedArr.includes(false) ? false : true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// TESTS
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true
// truthCheck([{"single": "yes"}], "single") should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
