/* Connection to MongoDB */

var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));
var dbConfig = require('../config/').db;

mongoose.connectAsync(dbConfig.development, dbConfig.options)
  .then(function() {
    console.log('Mongoose connected to ' + dbConfig.development);
  })
  .catch(function(err) {
    console.log('Mongoose connection failed (' + err + ')');
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
