const http = new EzHTTP();

const data = {
  name: "Johnny Cash",
  username: "Mr.Cash",
  email: "jdoe@gmail.com"
};

//get Users
http
  .get("http://jsonplaceholder.typicode.com/posts")
  .then(data => {
    data.forEach(data => {
      console.log(`ID:${data.id}\nBody:${data.body}\n`);
    });
    console.log(data);
  })
  .catch();

//Post
http
  .post("http://jsonplaceholder.typicode.com/posts", data)
  .then(data => {
    console.log(data);
  })
  .catch();

//Delete
http
  .delete("http://jsonplaceholder.typicode.com/posts/1")
  .then(res => console.log(res))
  .catch();

//Update
http
  .put("http://jsonplaceholder.typicode.com/posts/1", data)
  .then(res => console.log(res))
  .catch();

/* async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 4000);
  });
  const error = true;

  if (error) {
    const res = await promise; // wait until the promise is resolved
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(console.log(err));
 */
/* async function getUsers() {
  //await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //Only proceed once it's resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

//*Examples below:
//fetchFromGitHub().then(response => console.log(response[0].login));
getChuckNorrisJokes();

async function fetchFromGitHub() {
  return await fetch("https://api.github.com/users")
    .then(response => response.json())

    .catch(err => console.log(err));
}

function getChuckNorrisJokes() {
  return new Promise((resolve, reject) => {
    fetch("https://api.icndb.com/jokes/random/1")
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.value.forEach(element => {
          const para = document.createElement("p");
          para.textContent = element.joke;
          document.querySelector("body").append(para);
        });
      })
      .catch();
  });
}
 */
