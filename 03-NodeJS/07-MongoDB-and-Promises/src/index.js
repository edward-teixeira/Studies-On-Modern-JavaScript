require('./db/mongoose.js');
const jwt = require('jsonwebtoken')
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const PORT = process.env.PORT || 3000;

/* app.use((req, res, next) => {
  if (req.method === 'POST') {
    res.send('GET REQUEST ARE DISABLEDkj')
  } else {
    next();
  }
  next(); //to run the next step
}); */

/* app.use((req, res, next) => {
  res.status(503).send('The server is in maintence');

  next();
}) */

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log('Server is up on port' + PORT);
});


/* const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' });
  console.log(token);
  const data = jwt.verify(token, 'thisismynewcourse');
  console.log(data);

}
myFunction() */

/* const bcrypt = require('bcrypt');

const myFunction = async () => {
  const password = 'Red12345!';
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('Red12345', hashedPassword);
  console.log(isMatch);

}
myFunction()
 */