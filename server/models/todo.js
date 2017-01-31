const mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


// const newTodo = new Todo({
//   text: 'Vacuum',
//   completed: false,
//   completedAt: 5
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo, ', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

module.exports = {
  Todo
};
