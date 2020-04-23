/* Intermediate Algorithm Scripting: Diff Two Arrays

Compare two arrays and return a new array with any items only found
in one of the two given arrays, but not both. In other words, return the 
symmetric difference of the two arrays.

Note:
You can return the array with its elements in any order.
 */


// Thoughts
/*
Our input is two arrays, we have to return an array;
We can work on a solution by looping through the arrays but since we now have some newer methods
(reduce, map, filter, etc) let us try to work with them
With the loop, we can compare each array against each other
Another way to think about this is to combine the arrays then see what repeats
There is a `concat()` method to combine arrays, so we can start with that
We can use a `filter()` method after that but we must determine how to filter
The includes() method returns a true or false, so that would work well with filter
Reading back the instructions, we want to return values found in either array, but not both.
The filter() method will go through the combined array, if can use includes and check in 
the original arrays arr.filter(item => !arr1.includes(item) OR !arr2.includes(item))
the `!` meaning opposite (i.e. !false returns true)
*/

// Pseudocode
/*
function diffArray(arr1, arr2) {
  combine arrays

  check if each value is arr1 OR arr2
    return values
}
*/


function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  

// TESTS
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.