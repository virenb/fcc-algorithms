/* Intermediate Algorithm Scripting: Make a Person

Fill in the object constructor with the following methods below:

```
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```
Run the tests to see the expected output for each method. The methods that take
an argument must accept only one argument and it has to be a string. These methods
must be the only available means of interacting with the object.

*/

// THOUGHTS
/*
  We have to complete this object constructor. They have defined what methods they want.
  We can start by listing them out within the object constructor
  Our input, 'firstAndLast' is a string of a first and last name
  We can split(' ') the names into their own variables
  getFirst/Last/Full will just return the variables
  When it comes to the set methods, they take in an input of a string
  We can set those inputs to our current variables and return them
*/

var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly

  let [firstName, lastName] = firstAndLast.split(' ');

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function (first) {
    firstName = first;
    return firstName;
  };

  this.setLastName = function (last) {
    lastName = last;
    return lastName;
  };

  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    return `${firstName} ${lastName}`;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// TESTS
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
