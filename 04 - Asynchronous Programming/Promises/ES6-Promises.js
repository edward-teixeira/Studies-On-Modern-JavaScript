const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function createPost(post) {
  /**creates a promise
   * @param resolve:call for that we're done with what we're doing;
   * @param reject: what we wanna call if there are errors;
   **/
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
