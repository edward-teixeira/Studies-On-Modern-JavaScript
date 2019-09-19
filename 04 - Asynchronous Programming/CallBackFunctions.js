//*When we pass a callback function as a parameter to another function,
//*we are only passing the function definition as the parameter — the callback function
//*is not executed immediately. It is “called back” (hence the name) asynchronously somewhere
//*inside the containing function’s body.
//*The containing function is responsible for executing the callback function when the time comes. */

//Mimic a database
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

/* function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>
                  <li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPost({ title: "Post Three", body: "This is post three" });
getPosts(); */

//Callback version
function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback(); //Call getPosts
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>
                  <li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
getPosts();
