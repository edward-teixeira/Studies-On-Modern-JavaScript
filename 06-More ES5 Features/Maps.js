// Maps: key-value pairs = can use ANY type as a key or value
const map1 = new Map();

// Set keys
const key1 = "some string",
  key2 = {},
  key3 = function() {};

//set map values by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// get values by key
/* console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3)); */

// Count values
//console.log(map1.size);

// *Iterating Maps
// Loop using for...of to get keys and values
/* for (let [key, value] of map1) {
  console.log(`Key: ${key} Value: ${value}`);
}
 */
// Iterate keys only
/* for (let key of map1.keys()) {
  console.log(key);
}
for (let value of map1.values()) {
  console.log(value);
} */

// Loop with foreach
/* map1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
}) */
//Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);
const valArr = Array.from(map1.values());
console.log(valArr);
const keyArr = Array.from(map1.keys());
console.log(keyArr);
