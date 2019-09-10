// document.getElementsByClassName

//const items = document.getElementsByClassName("collection-item");
//console.log(items);

//console.log(items[0]);
//items[0].getElementsByClassName.color = "red";
//items[3].textContent = "Hello";

//const listItems = document
//.querySelector("ul")
//.getElementsByClassName("collection-item");
//console.log(listItems);

//// Document.getElementsByTagName()
//let lis = document.getElementsByTagName("li");
//console.log(lis);
//console.log(lis[0]);
//lis[2].textContent = "Hell9";

//// Convert HTML Collection into array
//lis = Array.from(lis);
//lis.reverse();

//lis.forEach((element, index) => {
//console.log(element.className);
//element.textContent = `${index}: "Hello"`;
//});

//document.querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach((item, index) => {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach((li, index) => {
  li.style.background = "#ccc";
});

console.log(items);
