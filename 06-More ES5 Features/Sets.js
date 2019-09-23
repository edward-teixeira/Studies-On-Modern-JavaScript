// Sets - Store UNIQUE values of any type
const set1 = new Set();
//Add values to set
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);
console.log(set1);
set1.add(100);

const set2 = new Set([1, true, function fn() {}, 100]);
// Get count
set1.size;

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50)); // true
console.log(set1.has({ name: "John" }));
console.log({ name: "John" } === { name: "John" }); // false because is poiting to another memory location

// Delete from set
set1.delete(100);

console.log(set1);

//*Iterating Through Sets
//For...of
/*The entries() method returns a new Iterator object that contains an array of
 [value, value] for each element in the Set object, in insertion order */
for (const item of set1) {
  console.log(item);
}
// ForEach Loop
set1.forEach(value => console.log(value));
// Convert Set To Array;
const setArr = Array.from(set1);
