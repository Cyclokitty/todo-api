const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('todos')
  //   .deleteMany({text: 'Order pizza'})
  //   .then((result) => {
  //     console.log(result)
  //   });

  // deleteOne
    // db.collection('todos')
    //   .deleteOne({text: 'Eat lunch'})
    //   .then((result) => {
    //     console.log(result);
    //   });

  //findOneAndDelete
      // db.collection('todos')
      //   .findOneAndDelete({completed: true})
      //   .then((result) => {
      //     console.log(result);
      //   });

  // challenge 1: deleteMany

  // db.collection('users')
  //   .deleteMany({name: 'Ralphie'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // challenge 2: findOneAndDelete by _id
      db.collection('users')
        .findOneAndDelete({_id: new ObjectID("588fab65f906b1ad1e2955a7")})
        .then((results) => {
          console.log(results);
        });

  // db.close();
});
