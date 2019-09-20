const http = new EasyHTTP();
//get Users
http
  .get("http://jsonplaceholder.typicode.com/posts")
  .then(data => data)
  .catch();

console.log(user);

//USer Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
};
const newData = {
  name: "New Data",
  username: "newdata",
  email: "newdata@gmail.com"
};

//Create Post
/* http.post('http://jsonplaceholder.typicode.com/posts',data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
 */

//Create PUT
/* http
  .put("http://jsonplaceholder.typicode.com/posts/1", newData)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

http
  .delete("http://jsonplaceholder.typicode.com/posts/1")
  .then(data => console.log(data))
  .catch(err => console.log(err));
