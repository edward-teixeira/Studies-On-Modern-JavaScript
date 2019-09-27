//Replace Element

//Create Element

const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
newHeading.className = "newTest";

//New text node
newHeading.appendChild(document.createTextNode("Not a list"));

//Get the old heading
const oldHeading = document.getElementById("task-title");

//Parent
const cardAction = document.querySelector(".card-action");

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

//Attributes

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.removeAttribute("title");
val = link;

console.log(val);

// Removing an element
const container = document.querySelector("#container");
container.remove(); // hasta la vista, baby
