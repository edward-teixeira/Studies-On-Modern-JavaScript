// Create Element

const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

//Add atribute
li.setAttribute("title", "new item");

// create text node and append
li.appendChild(document.createTextNode("Hello world"));

// Append li as child to ul

document.querySelector("ul.collection").appendChild(li);

// Another way for adding
document.body.insertAdjacentHTML(
  "beforeend",
  '<a href="/home" class="active">Home</a>'
);

/* 

    'beforebegin': before the element
    'afterbegin': inside the element before its first child
    'beforeend': inside the element after its last child
    'afterend': after the element
*/

//Create new link element
const link = document.createElement("a");
// or less verbose
//const link = document.createElement("a");
//const p = document.querySelector("p");
//p.insertAdjacentElement("beforebegin", link);
// add classes
link.className = "delete-item secondary-content";
// add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;
//append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
console.log(li);

//Moving elements
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
h1.insertAdjacentElement("afterend", h2);
//it will be simply be moved, not copied:

//Replacing
someElement.replaceWith(otherElement);

//addind an HTML element usind DOM String
const createElement = domString =>
  new DOMParser().parseFromString(domString, "text/html").body.firstChild;
const a = createElement('<a href="/home" class="active">Home</a>');
