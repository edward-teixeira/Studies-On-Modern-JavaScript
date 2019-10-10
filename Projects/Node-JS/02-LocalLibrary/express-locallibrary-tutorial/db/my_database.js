/* //Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://http://localhost:27017/book_store';
mongoose.connect(mongoDB,{useNewUrlParser: true});

//get the defaul connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:')); */