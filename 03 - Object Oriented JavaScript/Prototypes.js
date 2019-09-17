// Objects literals inherit from Object.prototype
// Prototypes are the universal "Object" from other languages like Java;

// Person constructor
function Person(name, surname, birthday) {
  this.name = name;
  this.surname = surname;
  //this.age = age;
  this.birthday = new Date(birthday);
  /*  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
 */
}
//Calculate age
// Passing the method to the prototype of Person
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
//Get full name
Person.prototype.getFullName = function() {
  return `${this.name} ${this.surname}`;
};
const john = new Person("John", "Doe", "8-12-1991");
// Gets Married Method
Person.prototype.getMarried = function(newLastName) {
  this.surname = newLastName;
};
const mary = new Person("Mary", "had a little lamb", "8-12-1981");
mary.getMarried("Smith"); // Mary Smith
/* console.log(mary.getFullName());
console.log(mary.hasOwnProperty("surname")); // True
console.log(mary.hasOwnProperty("fakeProperty")); // False */

var Animal = {
  tipo: "Invertebrado",
  qualTipo: function() {
    console.log(this.tipo);
  }
};
let animal1 = Object.create(Animal);
console.log(animal1.qualTipo());
