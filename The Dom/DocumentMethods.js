let val;

//DOCUMENT METHODS
val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
//val = document.form[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(element => {
  console.log(element.getAttribute("src"));
});

console.log(val);
