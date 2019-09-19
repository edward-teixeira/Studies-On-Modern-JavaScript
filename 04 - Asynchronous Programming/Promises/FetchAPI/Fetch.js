document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
  fetch("test1.txt")
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
//get local text file data
function getJson() {
  fetch("posts.json")
    .then(res => res.json())
    .then(data =>
      data.forEach(element => {
        const output = document.getElementById("output");
        const li = `<li>${element.title}</li>`;
        output.insertAdjacentHTML("afterbegin", li);
      })
    )
    .catch(err => console.log(err));
}

function getExternal() {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data =>
      data.forEach(element => {
        const output = document.getElementById("output");
        const li = `<li>${element.login}</li>`;
        output.insertAdjacentHTML("afterbegin", li);
      })
    )
    .catch(err => console.log(err));
}
