// For Loop

//const array = ["Apple", "Blueberry", "Peach", "Banana"];

//for (let index = 0; index < array.length; index++) {
    ////console.log(`Loop at index: ${index}`);

    //if( index == 2) {
      //console.log(`${array[index]} is my favotire fruit.`);
      //continue;
    //}
    //if( index == 3) break;

    //console.log(`${array[index]} is not my favorite fruit.`);
//}

// White Loop

let i = 0;

//while(i < 10) {
  //console.log(`Number ${i}`);
  //++i;
//}

//do {
  //console.log(`Number ${i}`);
  //++i;
//} while(i < 10);

//const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// For in
//for(car in cars) {
  //console.log(car);
//}
const user = {
  firstName: "Johnny",
  lastName: "Cash",
  age: 90
};

for(let x in user) {
  console.log(`${x}: ${user[x]}`);
  //X is the key
  //user[x] is the value 
}


// For each
//cars.forEach(function(car, index) {
    //console.log(`${index}: ${car}`);
//});

// MAP
//const users = [
  //{id: 1, name: "John"},
  //{id: 2, name: "Brad"},
  //{id: 3, name: "John"}];

  //const ids = users.map(() => users.id);
  //console.log(ids);

