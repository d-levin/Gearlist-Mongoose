/* Connection to MongoDB */

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var dbConfig = require('../config/config').db;

/* Helper method for MongoDB connection */
var connectWithRetry = function() {
  mongoose.connect(dbConfig.server, dbConfig.options);
};
connectWithRetry();

// Check connection status
var db = mongoose.connection;

// Retry on error
db.on('error', function() {
  console.log('Mongoose connection failed - retrying in 5 sec');
  setTimeout(connectWithRetry, 5000);
});
// On successful connection
db.once('open', function() {
  console.log('Mongoose connected to ' +
    db.host + ':' + db.port +
    '/' + db.name);
});

/*
 * Handles CTRL-C signal
 * Disconnect Mongoose when Node process terminates
 */
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log();
    console.log('Closing mongoose connection');
    console.log('Terminating server');
    process.exit(0);
  });
});
