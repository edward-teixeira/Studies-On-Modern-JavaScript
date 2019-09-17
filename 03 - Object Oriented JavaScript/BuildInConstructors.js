// String
const name1 = "John Doe";
const name2 = new String("John Doe");

//name2.foo = "bar";
//console.log(name2.foo);

//console.log(typeof name2); // Object
console.log(typeof name1); // String

name2 === "John Doe" ? console.log("yup") : console.log("Nope");

// Numbers

const num1 = 5; // number
const num3 = new Number(5); // Object

// Booleans
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(foo, bar) {
  return "baz";
};
const getSum2 = new Function("foo", "bar", "return baz"); // Weird

// Objects
const john1 = { surname: "Doe" }; // Doe
const john2 = new Object({ surname: "Doe" }); // Doe

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
