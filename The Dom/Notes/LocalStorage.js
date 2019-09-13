// set local storage item

localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// set session storage item
//sessionStorage.setItem("name", "Beth");

// remove from storage
//localStorage.removeItem("name");

// get from storage
//const name = localStorage.getItem("name");
//const age = localStorage.getItem("age");
//console.log(name + " " + age);

document.querySelector("form").addEventListener("submit", function(e) {
  console.log(123);
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) tasks = [];
  else tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task saved");
  //console.log(task);
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(element => {
  console.log(element);
});
