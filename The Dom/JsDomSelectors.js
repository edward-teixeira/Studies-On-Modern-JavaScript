//

//console.log(taskTitle);

//// Get things from the element
//console.log(taskTitle.id);
//console.log(taskTitle.className);

//const taskTitle = document.getElementById("task-title");

//// Change styling
//taskTitle.style.background = "white"; //"black";
////taskTitle.style.color = "orange";
//taskTitle.style.padding = "5px";

//// Change content
//taskTitle.textContent = "Task List"; //"black";
//taskTitle.innerText = "My tasks";
//taskTitle.innerHTML = '<span style= "color:tomato">Task List</span>';

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul").style.color = "blue";

document.querySelector("li:nth-child(3)").style.color = "purple";
document.querySelector("li:nth-child(odd)").style.background = "black";
