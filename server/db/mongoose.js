const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todoslist');

module.exports = {
  mongoose
};
