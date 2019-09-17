// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  Object.freeze(this);
}
// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe"); // Hello there John Doe
// Customer constructor

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}
// *Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// *Make Custumer.prototype return Customer()
Customer.prototype.constructor = Customer;
// *Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} Welcome to the company.`;
};

// Create Costumer
const customer = new Customer("Stevie", "Ray Vaughan", "999875232", "Standard");
console.log(customer);
console.log(customer.greeting());
