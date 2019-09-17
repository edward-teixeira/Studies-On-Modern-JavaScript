// Person constructor
function Person(name, birthday) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(birthday);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
//console.log(this); //  Gives window object outside the scope

/* const John = new Person("John", 40);

console.log(John); */

const brad = new Person("Brad", "9-10-1991");
console.log(brad);
console.log(brad.calculateAge());
