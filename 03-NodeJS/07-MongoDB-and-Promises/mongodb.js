/*// CRUD create read update delete

const mongodb = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017/admin"
const databaseName = "task-manager"


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) return console.log('Unable to connect to database');

  console.log('Connected correctly on localhost: 27017 ');
  const db = client.db(databaseName);

  /*  db.collection('users').insertMany([
     {
       name: "Jose",
       age: 12
     },
     {
       name: "Keyla",
       age: 19
     },
     {
       name: "Edward",
       age: 29>
     },
   ], (error, result) => {
     if (error) return error;

     console.log(result);
   }) */

/*   db.collection('users').updateOne({
    name: "Jose"
  },
    {
      $set: {
        name: "Mike"
      }
    })
    .then(result => console.log(result))
    .catch(error => console.log(error)); */

/*   db.collection('users').updateOne({
    name: "Mike"
  },
    {
      $inc: {
        age: 1
      }
    })
    .then(result => console.log(result))
    .catch(error => console.log(error)); */


//db.test.updateMany({foo: "bar"}, {$set: {test: "success!"}})
/*  db.collection('users')
   .updateMany({ name: "Mike" },
     {
       $set:
         { name: "Michael Jackson", age: 10 }
     },

   )
   .then(result => console.log(result))
   .catch(error => console.log(error)); */

/*  db.collection('users').deleteOne({
   name: "Michael Jackson"
 }).then(result => console.log(result))
   .catch(error => console.log(error)); */

/* db.collection('users').deleteMany({
  age: 29
}).then(result => console.log("The items were deleted"))
  .catch(error => console.log("Can't delete the data"));
});
 */
