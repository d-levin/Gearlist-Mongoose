/* Connection to MongoDB */

var mongoose = require('mongoose');
var dbConfig = require('../config/').db;

mongoose.connect(dbConfig.development, function(err) {
  if (err) {
    console.log('Mongoose connection failed ' + err);
  } else {
    console.log('Mongoose connected to ' + dbConfig.development);
  }
});

/*
 * Handles CTRL-C signal
 * Disconnect Mongoose when Node process terminates
 */
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Closing mongoose connection');
    console.log('Terminating server');
    process.exit(0);
  });
});
