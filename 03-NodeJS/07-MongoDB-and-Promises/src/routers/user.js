const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    response.status(201).send({ user, token });
  } catch (e) {
    response.status(404).send(e);
  }

});
//User log in
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    });
    await req.user.save();
    res.send()
  } catch (e) {
    res.status(500).send();
  }
})

//Lot out of all sessions
router.post('/users/logoutall', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save();
  } catch (error) {

  }
})
//retrict the view to the logged user only
router.get('/users/me', auth, async (request, response) => {

  response.send(request.user);

});

router.get('/users/:id', async (request, response) => {

  try {
    const user = await User.findById(request.params.id)
    user ? response.status(200).send(user) : response.status(404);
  } catch (e) {
    response.send(404).send(e);
  }
  /* User.findById(request.params.id)
    .then(user => user ? response.send(user) : response.status(400)
    )
    .catch(error => response.status(400).send(error)); */
})

router.patch("/users/:id", async (request, response) => {
  const updates = Object.keys(request.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isValidOperation) return response.status(400).send({ error: "Invalid updates" });

  try {
    const user = await User.findById(request.params.id);

    updates.forEach((update) => user[update] = request.body[update]);
    await user.save();

    //const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
    user ? response.status(200).send(user) : response.status(400)
  } catch (e) {
    response.status(400).send(e);
  }
})

router.delete('/users/:id', async (request, response) => {
  try {
    const deleted = await User.findByIdAndDelete(request.params.id)
    deleted ? response.status(200).send(deleted) : response.status(404).send();
  } catch (e) {
    response.status(400).send(e);
  }
})

module.exports = router;