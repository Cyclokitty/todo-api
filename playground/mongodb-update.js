const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('todos')
  //   .findOneAndUpdate({_id: new ObjectID("588fa77ff906b1ad1e29547c")}, {$set: {completed: true}}, {returnOriginal: false})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // challenge
  db.collection('users')
    .findOneAndUpdate({name: 'Cakey'}, {$inc: {age: 1}}, {returnOriginal: false})
    .then((result) => {
      console.log(result);
    });

  // db.close();
});
