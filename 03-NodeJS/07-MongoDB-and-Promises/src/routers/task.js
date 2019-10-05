const Task = require('../models/tasks');
const express = require('express');
const router = new express.Router();

router.get('/tasks', async (request, response) => {

  try {
    const tks = await Task.find({});
    tks ? response.send(tks) : response.status(404);
  } catch (e) {
    response.status(500).send(e);
  }

  /* Task.find({})
    .then(tasks => tasks ? response.send(tasks) : response.status(500))
    .catch(error => response.status(400).send(error)) */
})

router.get('/tasks/:id', async (request, response) => {

  try {
    const tsk = await Task.findById(request.params.id)
    tsk ? response.status(202).send(tsk) : response.status(404)
  } catch (e) {
    response.status(500).send(e);
  }
  /* Task.findById(request.params.id)
    .then(task => {
      if (task) return response.send(task);
      else
        return response.status(500).send();
    })
    .catch(error => response.status(400).send(error)); */
})

router.post('/tasks/:id', async (request, response) => {

  try {
    const tsk = Task.findByIdAndDelete(request.params.id)
    tsk ? response.status(200).send() : response.status(404)
  } catch (e) {
    response.status(404).send(e);
  }
  /* Task.findByIdAndDelete(request.params.id)
    .then(removedTask => removedTask ? response.status(200).send()
      : response.status(404))
    .catch(error => response.status(404).send()); */
})

router.post('/tasks', async (request, response) => {
  const task = new Task(request.body)
  try {
    await task.save()
    response.status(201).send(task);
  } catch (e) {
    response.status(404).send(e);
  }
  /* task.save()
    .then(() => response.status(200).send(task.body))
    .catch((error) => response.status(400).send(error)) */
})

router.patch('/tasks/:id', async (request, response) => {

  const tasks = Object.keys(request.body);
  const fields = ['description', 'done']
  const isValid = tasks.every(task => fields.includes(task))

  if (!isValid)
    return response.status(404).send({ error: "Invalid updates" });

  try {
    const task = await Task.findById(request.params.id);

    if (!task)
      return response.status(404).send();

    fields.forEach(field => task[field] = request.body[field]);
    await task.save();
    response.send(task)
  } catch (e) {
    response.status(404).send(e);
  }
})

router.delete('/tasks/:id', async (request, response) => {
  try {
    const deleted = await Task.findByIdAndDelete(request.params.id);
    deleted ? response.status(200).send(deleted) : response.status(404).send();
  } catch (e) {
    response.status(404).send(e);
  }
})

module.exports = router;
