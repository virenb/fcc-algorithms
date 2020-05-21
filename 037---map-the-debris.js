/* Intermediate Algorithm Scripting: Map the Debris

Return a new array that transforms the elements' average altitude into their 
orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
398600.4418 km3s-2.

*/


// THOUGHTS
/*
  Need to find the formula for orbital periods, make sure the output is in seconds
  Most probably will get a decimal, we need to round up to the next whole number
  Will have to utilize Math object, as they have built in properties which would be useful
  Math.round() to round
  Need to figure out how to calculate
  Remove avgAlt and add in orbitalPeriod
  From a lot of searching, the proper formula is T = 2*pi*sqrt(r^3/GM); r = earthRadius+avgAlt
  Can use `Math.PI` and also `Math.sqrt()`
  Can map through `arr`, calculating the formula, deleting `avgAlt` then adding the new
  key-value pair
  Make sure to return arr!
*/


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map(obj => {
    let oP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    delete obj.avgAlt;
    obj.orbitalPeriod = oP;
  })
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// TESTS
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

