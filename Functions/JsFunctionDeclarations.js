// Function Declaration
function greet(firstName = "default firstName", lastName = "default lastName") {
  //Default args

    //console.log("Hello from a function");
    return "Hello " + firstName + " " + lastName;
}

//console.log(greet("Johnny", "Cash"));

// Function Expressions
//const square = function(x = 8) {

    //return Math.pow(x,2);
//};

//console.log(square(2));

// IIFEs

//(function() {
  //console.log('IIFE Ran...')
//})();

//(function(name) {
  //console.log(`Hello from IIFEs ${name}`);
//})(`Edward`);


// Property Methods

const todo = {
  add: function() {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`); 
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}

todo.add();
todo.edit();
todo.delete();