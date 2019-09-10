// Define UI variables
//query the form by id, so that we can put the listeners into it
const form = document.querySelector("#task-form");
//A reference to out list of tasks (ul), so that we can append lis to it
const taskList = document.querySelector(".collection");
const clearBTN = document.querySelector(".clear-tasks");
//filter to search/filter the task list
const filter = document.querySelector("#filter");
//Where the user write the tasks
const taskInput = document.querySelector("#task");

// Load all event listeners to the form
(function() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);
  //Add task event
  form.addEventListener("submit", addTask);
  //Remove task event
  taskList.addEventListener("click", removeTask);
  //Clear task event
  clearBTN.addEventListener("click", clearTasks);
  //Filter task event
  filter.addEventListener("keyup", filterTasks);
})();

//Get Tasks from LocalStorage
function getTasks() {
  let tasks;
  //check if is there something in the task storage
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    //Local storage can only accept String, so we parse it as JSON
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
    //Create new link element
    const link = document.createElement("a");
    //Add class
    link.className = "delete-item secondary-content";
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
  });
}

// Store task in LocalStorage
function storeInLocalStorage(task) {
  let tasks;
  //check if is there something in the task storage
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    //Local storage can only accept String, so we parse it as JSON
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  // JSON.stringify is needed in order to store it
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  //Delete a task that is equal to a task in the array
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      //delete from starting index, and number of elements
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

/**************************************************************************************************************************************************************** */

//Add Task
function addTask(e) {
  //if the user type "nothin'"
  if (taskInput.value === "") {
    alert("Add a task");
  }
  e.preventDefault();

  // if the user type a valid input

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement("a");
  //Add class
  link.className = "delete-item secondary-content";
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  //Store in local storage
  storeInLocalStorage(taskInput.value);
  //Clear input
  taskInput.value = "";

  console.log(li);
}

//Remove task
function removeTask(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You sure?")) {
      e.target.parentElement.parentElement.remove();

      //Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Clear tasks
function clearTasks() {
  // Replace the taskList content with an empty string like so: <ul>""</ul>
  //taskList.innerHTML = "";

  //Faster
  //while taskList has a child, remove them
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // reference:
  // https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements

  // Clear from LS
  clearTasksFromLocalStorage();
}

// Filter tasks
function filterTasks(e) {
  //Gives us whatever is being typed
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    // if no match for the text is found it shows
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      //if it matches, then hide all but the one
      task.style.display = "none";
    }
  });
}
