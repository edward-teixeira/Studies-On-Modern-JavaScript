let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
//val = list.childNodes[0].nodeType;
//val = list.childNodes[1].nodeType;

//NODE TYPES
// 1 - Element
// 2 - Attribute (deprecated)
// 3 Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = "Hello";
//Children of children
val = list.children[3].children;

//First and Last Child
val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild.textContent = "I'm the last one";

//Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
const parent = listItem.parentElement;
const parentOfParent = parent.parentElement;
//console.log(parentOfParent);

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.previousElementSibling;
console.log(val);

//matches determines if an element will match a certain selector
//<p class="foo">Hello world</p>
const p = document.querySelector("p");
p.matches("p"); // true
p.matches(".foo"); // true
p.matches(".bar"); // false, does not have class "bar"

//This method allows you to determine if one element precedes or follows another element or
//if one of these elements contains the other.
/* <div class="container">
  <h1 class="title">Foo</h1>
</div><h2 class="subtitle">Bar</h2>const container = document.querySelector('.container'); */
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2"); //  20: h1 is contained by container and follows container
container.compareDocumentPosition(h1); // 10: container contains h1 and precedes it
h1.compareDocumentPosition(container); // 4: h2 follows h1
h1.compareDocumentPosition(h2); // 2: h1 precedes h2
h2.compareDocumentPosition(h1);

//You can observe changes to any DOM node through the MutationObserver interface.
const target = document.querySelector("#container");
const observer = new MutationObserver(callback);
observer.observe(target, options);
