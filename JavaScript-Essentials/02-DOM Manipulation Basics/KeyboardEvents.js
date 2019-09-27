const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

//taskInput.value = "";
form.addEventListener("keydown", runEvent);

//Key down and up
//taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent);
//taskInput.addEventListener("keypress", runEvent);

//Focus
taskInput.addEventListener("focus", runEvent);
//Blur
//taskInput.addEventListener("blur", runEvent);
//Cut
//taskInput.addEventListener("cut", runEvent);
//Paste
//taskInput.addEventListener("paste", runEvent);
//Copy
//taskInput.addEventListener("copy", runEvent);
//Input
//taskInput.addEventListener("input", runEvent);
// CHange
select.addEventListener("change", runEvent);

function runEvent(e) {
  //e.preventDefault();
  console.log(` EVENT TYPE "${e.type}"`);
  console.log(taskInput.value);
  //Get input value
  //heading.innerText = e.target.value;
}
