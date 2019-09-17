const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

/* const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastname = " Had a little lamb";
mary.age = "30";

mary.getsMarried("Thompson");
console.log(mary.greeting()); */

//Alternative Syntax
const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 30 }
});

console.log(brad);

console.log(brad.greeting());
