let re;
//Literal Characters
re = /hello/;
re = /hello/i;
// Metacharacter Symbols
re = /^h/i; //* Must start with
re = /World$/i; //* Must ends with
re = /$hello$/i; //* Must start begin and end
re = /^h.llo$/i; //* Matches any ONE character
re = /h*llo$/i; //* Matches any character 0 or more times
re = /gre?a?y/i; //* Optional character
re = /gre?a?y\?/i; //* Escape character
//Brackets [] - Character Sets
re = /gr[ae]y/i; //* Must be an a or e
re = /[GF]ray/i; //* Must be an G or F
re = /[^GF]ray/; //* Match anything EXCEPT a G or F
re = /[A-Z]ray/; //* Match any uppercase letter
re = /[A-Za-z]ray/; //* Match any letter from any case
re = /[0-9]ray/; //* Match any digit
//Braces {} - Quantifiers
re = /Hel{2}o/i; //* Must occur exactly {n} amount of times
re = /Hel{2,4}o/i; //* Must occur exactly {n} amount of times
re = /Hel{2,}o/i; //* Must occur  at least {n} times
// Parentheses () - Grouping
re = /^([0-9]x){3}$/; //* Must be exactly 3x 3 times and end
//Shorthand Character Classes
re = /\w/; //* Word character - alphanumeric: any number, letter and underscore
re = /\w+$/; //* + = one or more
re = /\W/; //* No-Word character
re = /\d/; //* Match any digit
re = /\d+/; //* Match any digit 0 or more times
re = /\D/; //* Non-digit
re = /\s/; //* Match whitespace character
re = /\S/; //* Match non-whitespace character
re = /Hell\b/i; //* Word boundary

//Assertions - Like conditionals
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; //* Match x online if NOT followed by y
// String to match
const str = "xuy";
/**************** */

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
