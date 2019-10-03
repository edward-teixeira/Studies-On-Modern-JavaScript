const express = require('express');
const app = express();
require('./db/mongoose.js');
const User = require('./models/user.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (request, response) => {
  const user = new User(request.body);

  user.save()
    .then(() => response.send(user)
    ).catch(error => response.status(400).send(error)
    );

});

app.listen(PORT, () => {
  console.log('Server is up on port' + PORT);
})
