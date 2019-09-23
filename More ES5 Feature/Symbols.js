// Create a Symbol
const sym1 = Symbol("sym1");
const sym2 = Symbol("sym2");

//Symbols can never be the same, can't have the same Identifier
console.log(Symbol("123") === Symbol("123")); //false

// Assign unique object Keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");
const myObj = {};
myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";

//Symbol are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); // 'Prop3' 'Prop4'
}
//Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" }));
