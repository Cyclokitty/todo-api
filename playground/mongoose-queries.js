const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '589a42ee3ad9f124ed7e538b';

User.findById(id).then(user => {
  if (!user) {
    return console.log('User does not exist');
  }
  console.log('User email is: ', user.email);
}).catch(e => console.log(e));

// let id = '589a39dfa35391322fbdc238';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos by find: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo by findOne: ', todo);
// });
//
// Todo.findById('589a39dfa35391322fbdc').then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo by id: ', todo );
// }).catch(e => console.log(e)) ;
//
// Todo.findById('689a39dfa35391322fbdc238').then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id: ', todo );
// }).catch(e => console.log(e)) ;

//query the users collection - insert some if your user file is empty
// install user model
// user.findbyid if user not found, have a message, a message when found, and an error
