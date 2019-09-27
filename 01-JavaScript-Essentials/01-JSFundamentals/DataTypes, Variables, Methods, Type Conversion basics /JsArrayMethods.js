//Create Arrays
const numbers = [1,2,3,4,-1,83,238,0013]; // Or new Array();
const numbers2 = new Array(22,45,33,11,9,-1);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a: 10, b:20}, new Date()];

let val;
//console.log(mixed);

// Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value;
val = numbers.indexOf(3);

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(0)
//Take off from end
numbers.pop();
//Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3, "Splice"); //indice: onde eu quero começar
                              // quantos elementos eu quero remover
                              //O elemento que eu quero adicionar
// Reverse 
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
// Asc
val = numbers.sort((x,y) => x-y);
//console.log(val);
//Desc
val = numbers.sort((x,y) => y-x);

// Find
const apple = (fruit) => fruit === "Apple";
val = fruit.find(apple);

console.log(numbers);
console.log(val);
