const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    response.status(201).send(user);
  } catch (e) {
    response.status(404).send(e);
  }
  /* user.save()
    .then(() => response.send(user)
    ).catch(error => response.status(400).send(error)
    ); */

});

router.get('/users', async (request, response) => {

  try {
    const users = await User.find({})
    response.status(200).send(users);
  } catch (e) {
    response.send(404).send(e);
  }
  /* User.find({}).then(users => response.send(users))
    .catch(error => response.status(400).send(error)); */

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
    const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
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