const firstName = "William";
const lastName = "Johnson";
const age = 28;
const str = " Hello there my name is Edward";
let val;

val = firstName + lastName;

//Concatenação
val = firstName + " " + lastName;

// Append
val = "Friedrich";
val += "Bach";

val = " Hello, my name is " + firstName + "and I am " + age + ".";
//console.log(val);
//Escaping

val = "That's awesome, I can't wait";
//console.log(val); 

// length
val = firstName.length;
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
//console.log(val);
val = firstName.toLowerCase();

//look up by index
val = firstName[2];
val = firstName.indexOf("W");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt('2');
// Get last char 
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4); // last arg is exclusive

//slice()
val = firstName.slice(0,4); //same as substring
val = firstName.slice(-2); //starts slicing backwards

//split()
val = str.split(" ");

// replace()
val = str.replace("Edward", "Junior");

//includes()

val = str.includes("foo");
val = str.includes("Edward");

console.log(val);