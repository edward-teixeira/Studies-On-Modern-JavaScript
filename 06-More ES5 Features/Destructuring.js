// Destructuring Assigment
let a, b;
[a, b] = [100, 200];

/* console.log(a); //100 */
//Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
/* console.log(rest); //400,500 */

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
/* console.log(a, b); // 100 200
console.log("Array Of" + rest); //300,400,500 */

// Array Destructuring

const people = ["John", "Beth", "Mitchel"];

/* const [person1, person2, person3] = people; */
/* console.log(person1); // John
console.log(person2); // Beth
console.log(person3); //Mike */

// Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}
let person1, person2, person3;
[person1, person2, person3] = getPeople();

// Object Destructuring
const person = {
  name: "John Doe",
  age: 32,
  city: "Almenara",
  gender: "Male",
  sayHello: function() {
    console.log("Hello");
  }
};

// Old ES5
/* const name = person.name;
const age = person.age;
const city = person.city; */
// New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name + " " + age + " " + city);
sayHello();
