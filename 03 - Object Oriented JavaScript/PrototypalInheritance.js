// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  Object.freeze(this); // make the object final
}
// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe"); // Hello there John Doe
// Custumer constructor
function Custumer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}
// *Inherit the Person prototype methods
Custumer.prototype = Object.create(Person.prototype);

// *Make Custumer.prototype return Custumer()
Custumer.prototype.constructor = Custumer;
// *Custumer greeting
Custumer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} Welcome to the company.`;
};

// Create Costumer
const Custumer = new Custumer("Stevie", "Ray Vaughan", "999875232", "Standard");
console.log(Custumer);
console.log(Custumer.greeting());
