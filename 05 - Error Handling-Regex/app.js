const user = { email: "jdoe@gmail.com" };

try {
  // Produce a Reference Error
  //myFunction();
  // Produce a TypeError
  //null.myFunction();
  // Will produce SyntaxError
  //eval("2+2"); // evaluates js into a string
  // Will produce URIError
  // decodeURIComponent("%");

  if (!user.name) {
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(e.message);
  //console.log(e);
  /*   console.log(e.message); // prints the error message
  console.log(e.name);
  console.log(e instanceof ReferenceError); // the type of the error */
} finally {
  //Just runs no matter what
  console.log("Finally runs regardless of result");
}

console.log("Program continues...");
