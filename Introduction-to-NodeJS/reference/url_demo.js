const url = require("url");

const my_url = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Serialized URL
console.log(my_url.href);
console.log(my_url.href.toString());
// Host (root domain)
console.log(my_url.host);
// Hostname (does not get port)
console.log(my_url.hostname);
// Pathname
console.log(my_url.pathname);
// Serialized query
console.log(my_url.search);
// Params objetc
console.log(my_url.searchParams);
// Add param
my_url.searchParams.append("abc", "123");
console.log(my_url.search);
// Loop through params which gives key,value
my_url.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
