const mongoose = require('mongoose');

// user model: email and require it and trim it and set type to trim and minlength of 1

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// const newUser = new User({
//   email: 'smoopie@example.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user ', doc);
// }, (e) => {
//   console.log('Unable to save new user');
// });

module.exports = {
  User
};
