let val;

//  Number to String
val = String(5);
val = String(Math.pow(4,2))

// Boolean to String
val = String(true);
//Date to string
val = String(new Date());
// Array to String
val = String([1,2,3,4,5]);

// toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number("5");
//console.log(val.toFixed(2))
val = Number(true);//1
val = Number(false);//0
val = Number(null);//0
val = Number("Hello"); //NaN (Not a number)
val = Number([1,2,3]); //undefined

val = parseInt("199");
val = parseFloat(199.01);


//Type Coersion
const val1 = "5";
const val2 = 10;
const sum = val1 + val2;
console.log(sum);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);