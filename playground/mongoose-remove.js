const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) can't pass in an empty agrument

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// will remove only 1
//  Todo.findOneAndRemove()

// with remove with id
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('58a211369878a901e4072e47').then((todo) => {
//   console.log(todo);
// });

//findOneAndRemove needs the __id to work like findByIdAndRemove
Todo.findOneAndRemove({_id: '58a212279878a901e4072e48'}).then((todo) => {
  console.log(todo);
});
