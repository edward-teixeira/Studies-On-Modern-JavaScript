const person = {
  firstName: "Steve",
  lastNAme: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "programming", "sports"],
  address: {
    city: "Miami",
    state: "Florida"
  },
  getBirthYear: function () {
      return 2017 - this.age;
  } 
}

let val;
val = person;
//Get specific value
val = person.firstName; //or:
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
//Array os objects literals
const people = [
  {name: "John", age: 30},
  {NAME: "Mike"}
];
for (let i = 0; i < people.length; i++) {
  const element = people[i];
  console.log(element);
}