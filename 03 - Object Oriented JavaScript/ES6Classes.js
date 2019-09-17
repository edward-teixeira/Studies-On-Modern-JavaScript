class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  static addNumbers(x, y) {
    return x + y;
  }
}
const mary = new Person("Mary", "Williams", "11-13-1980");
mary.getsMarried("Thompson");

// Inheritance

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `HEllo there ${this.firstName} ${this.lastName}`;
  }
}

class Custumer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const john = new Custumer("John", "Doe", "555-555-5555", "Standard");

/* console.log(john.greeting());
console.log(Custumer.getMembershipCost()); */

var o = { a: 0 };

Object.defineProperties(o, {
  b: {
    get: function() {
      return this.a + 1;
    }
  },
  c: {
    set: function(x) {
      this.a = x / 2;
    }
  }
});

o.c = 5;
console.log(o.a);
delete o.a;
console.log(o.a);
o.a = 30;
console.log(o.a);
