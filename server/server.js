const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const _ = require('lodash');
const app = express();
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
});

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  // valid id using isValid
  if (!ObjectID.isValid(id)) {
    // 404 - send back empty body
    return res.status(404).send('Invalid ID. Try again.');
  }
  // query findById and match the id
  Todo.findById(id).then((todo) => {
    // success
    // if todo - send it back
    if (todo) {
      res.send({todo});
    } else {
      // if no todo - send back 404 with   empty body
      // error
        // 400 - empty send empty body
      res.status(404).send('No todo with that id');
    }
  }).catch(e => res.status(400).send(`An error has occured`));
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  const id = req.params.id;
  // validate the id -> not valid, send back a 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('This is not a valid id. Try again!');
  }
  // remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    if (todo) {
      // success
      res.send({todo});
    } else {
      // if no doc send 404
      res.status(404).send('There is no todo with that id');
    }
  }).catch(e => res.status(400).send('An error has occured '));
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('This is not a valid id. Try again!');
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send('No todo found.');
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = {app};
