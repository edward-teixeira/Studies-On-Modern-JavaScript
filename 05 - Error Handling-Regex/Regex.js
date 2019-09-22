// Regex is used to describe a pattern matching
let re = /hello/; //Each of these characters are literal character  it evaluates the actual expression inside

//exec() - Returns result in an array if there is a match or null
//which means it will be taken as face value (what it actually is)
// i flag means case insensitive
re = /hello/i;
// g flag means global search - searches the entire instance for a match like a paragraph
//re = /hello/g;

/* console.log(re);
console.log(re.source); */

/* const result = re.exec("hello Space World");
console.log(result); // print the match if match or null if it doesn't
console.log(result[0]);
console.log(result.index);
console.log(result.input); */

// SOME REGEX FUNCTIONS
//test() - Returns true of false depending on the match
/* const result = re.test("Hello");
console.log(result); */

//match() - Returns result array or null
/* const str = "Hel There";
const result = str.match(re); */

//search() - Returns index of the first match if not found it returns a -1
/* const str = "Hello There";
const result = str.search(re) */

// replace() - Return new string with some or all matches of a pattern
/* const str =
  "Hello There";
const newstr = str.replace(re, "Hi"); */ console.log(
  newstr
);
