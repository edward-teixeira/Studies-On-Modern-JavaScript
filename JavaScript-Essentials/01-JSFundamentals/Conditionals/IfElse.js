//if(something) {
  //do something
//}else {
  //do something;
//}
const id = 100;
//Equal to
//if(id == 100) {
  //console.log('Correct');
//} else {
  //console.log("Incorrect");
//}

//// Not equal To
//if(id != 101) {
  //console.log('Correct');
//}else {
  //console.log("Incorrect");
//}

//// Equal to value & Type
//if(id === 100) {
  //console.log('Correct');
//} else {
  //console.log("Incorrect");
//}
//// Not Equal to value & Type
//if(id !== 100) {
  //console.log('Correct');
//} else {
  //console.log("Incorrect");
//}

//Test if undefined
//if(typeof id !== 'undefined') {
  //console.log(`The ID is ${id}`)
//} else {
  //console.log("Not ID");
//}

// Greater or Less Than (or equal)
//if(id >= 200) {
  //console.log("Correct");
//}else {
  //console.log("Incorrect");
//}
//// If ELSE
//const color = "Yellow";
//if(color === 'red') {
  //console.log(`Color is red`);
//} else if(color === 'blue'){
  //console.log('Color is blue');
//}

// Logical Operators

const name = 'Steve';
const age = 25;
// AND &&
if(age > 0 && age <12) { //Both true
  console.log(`${name} is a child`)
}else if( age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
}else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//Ternaty operator
console.log(id === 100? `Correct`: `Incorrect`);

// Without braces is ok if the statement is 1 line 
if( id === 100) 
    console.log(`Correct`);
else 
  console.log(`Incorrect`);


