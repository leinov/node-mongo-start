var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-mongo-start');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("MongoDB Opened!");
});
