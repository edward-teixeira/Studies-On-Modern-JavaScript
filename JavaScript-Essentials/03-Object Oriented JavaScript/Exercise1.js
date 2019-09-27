//Class Employee
function Employee(name, dpt) {
  this.name = name;
  this.dpt = dpt;
}
//Added a method getEmployee to the Employee Class
Employee.prototype.getEmployee = () =>
  `Name: ${this.name}\nDepartment: ${this.dpt}`;

//Create a manager class that inherits from Employee
function Manager(name, dpt, salary) {
  Employee.call(this, name, dpt);
  this.salary = salary;
}
//set the manager class to inherit from Employee
Manager.prototype = Employee.prototype;
// set the Manager class constructor to return an instance of manager instead fo Employee
Manager.prototype.constructor = Manager;
Manager.prototype.getEmployee = function() {
  return `\nName: ${this.name}
Deparment: ${this.dpt}
Salary: ${this.salary}`;
};

//Employees
let johnnyCash = new Employee("Johnny Cash", "Sales");
let maryJane = new Employee("Mary Jane", "I.T");
//Managers
let billTheManager = new Manager("Bill The Manager", "Finance", "$ 1.000,00");
let maryTheManager = new Manager("Mary The Manager", "Sport Sales", "$500,00");
//console.log(billTheManager.getEmployee());
console.log(maryTheManager.isPrototypeOf(Manager.prototype));
