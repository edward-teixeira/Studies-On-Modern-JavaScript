// var, let, const
//var name = "Johnny";
//console.log(name);
//name+="Cash";
//console.log(name);

// Init var
//var greeting;
//console.log(greeting); //undefined
//greeting = "Hello";
//console.log(greeting) //Hello

//Rules and conventions: 
//can include: letter, numbers, _, $;
//can't start with number;

//Multi word vars
var firstName = "Johnny"; // Camel case
var first_name = "June"; // Underscore
var FistName = "Jackie"; //Pascal case
var firstname;

//let same as var except for the scope
//replaces var in modern javascript
let name = "Johnny";
name += "Cash";
console.log(name);

//Const
//Can not reassign
// Have to assign a value

//you can do this
const person  = {
    firstName: "Edward",
    secondName: "Teixeira",
};
console.log(person);
person.firstName = "Johnny";
person.secondName = "Cash";
console.log(person);

//But you can't do this
const greeting = "Hello World";
greeting = "Immutable"; //error