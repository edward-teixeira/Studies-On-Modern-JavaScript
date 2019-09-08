const name = "John";
const age = 30;
const job = "Programmer";
const city = "Miami";

function Hello() {
  return "Hello from a function";
}

// Without template Strings (ES5)
html5 = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job:" +
        job + " </li><li>City: " + city + "</li></ul>";

document.body.innerHTML = html5;

// With template string(ES6)
html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2+2}</li>
      <li>${Hello()}</li>
    </ul>
`;
document.body.innerHTML = html;

