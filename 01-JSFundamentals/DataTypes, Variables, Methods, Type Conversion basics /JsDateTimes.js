let val;

const today = new Date(); // todays date
let birthday = new Date("7-20-1991 17:30:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");
val = today;
val = birthday;

//Date.getMonth() uses index 0
val = today.getMonth() + 1;
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setMonth(1);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);


console.log(birthday);
