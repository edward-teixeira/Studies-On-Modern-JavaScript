const http = new easyHTTP();
// Get all Posts
http.get("http://jsonplaceholder.typicode.com/posts", function(error, posts) {
  if (error) console.log(error);
  else console.log(posts);
});
// Get single Post
http.get("http://jsonplaceholder.typicode.com/posts/100", function(
  error,
  posts
) {
  if (error) console.log(error);
  else console.log(posts);
});

//Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};
// Create Post
http.post("http://jsonplaceholder.typicode.com/posts", data, function(
  error,
  post
) {
  console.log(post);
});
//UPDATE A POST
http.put(`http://jsonplaceholder.typicode.com/posts/1`, data, function(
  error,
  post
) {
  if (error) console.log(error);
  else console.log(post);
});
//DELETE
http.delete("http://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
