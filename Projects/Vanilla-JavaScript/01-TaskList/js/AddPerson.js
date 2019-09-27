/*
  TODO: 
  * - [x] Add a task into the task list;
  * - [x]  Remove a task from the task list;
  * - [x] Fitler Task from List
  * - [x] Clear Tasks
  * Bonus:
  * [x] - From Local Storage with the same features;
  
*/
let form = document.querySelector("form");
let textInput = document.getElementById("task");
let btnTask = document.getElementById("btnAddTask");
let taskList = document.getElementById("taskList");
let ul = document.querySelector("#taskList");
let filterInput = document.querySelector("#filter");
let btnClearTask = document.querySelector(".clear-tasks");
//Add Listeners
(function() {
  btnTask.addEventListener("click", addTask);
  document.addEventListener("DOMContentLoaded", getTasks);
  ul.addEventListener("click", removeTask);
  filterInput.addEventListener("keyup", filterTask);
  btnClearTask.addEventListener("click", clearTasks);
})();

//Clear Tasks From LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function addToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  //console.log(taskItem);
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
  }
  tasks.forEach(function(task, index) {
    //if (taskItem.textContent === task) tasks.splice(index, 1);
    tasks.splice(index, 1);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(element) {
    let li = collectionItemFactory(element)();
    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();

  if (
    textInput.value !== null &&
    textInput.value !== "undefined" &&
    textInput.value != ""
  ) {
    let li = collectionItemFactory(textInput.value)();
    taskList.appendChild(li);
    addToLocalStorage(textInput.value);
    textInput.value = "";
  }
}

function collectionItemFactory(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.className = "collection-item";
  return function() {
    let a = document.createElement("a");
    a.className = "delete-item secondary-content";
    a.href = "#";
    a.innerHTML = `<i class="material-icons">delete</i>`;
    li.appendChild(a);
    return li;
  };
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocalStorage();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
    //Remove from LS
  }
}

function filterTask(e) {
  if (document.querySelectorAll(".collection-item").length != 0) {
    let arr = document.querySelectorAll(".collection-item");
    arr.forEach(function(li) {
      let item = li.firstChild.textContent;
      // if the text doens't match the text from item, then hide the li telse shows it
      item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        ? (li.style.display = "block")
        : (li.style.display = "none");
    });
  }

  //console.log(e.key);
  e.preventDefault();
}
