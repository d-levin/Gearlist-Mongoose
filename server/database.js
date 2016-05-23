/* Connection to MongoDB */

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var config = require('./config/config');

/* Helper method for MongoDB connection */
var connectWithRetry = function() {
  mongoose.connect(config.db.server, config.db.options);
};
connectWithRetry();

// Get connection status
var db = mongoose.connection;

// Retry on error
db.on('error', function() {
  console.error('Mongoose connection failed - retrying in 5 sec');
  setTimeout(connectWithRetry, 5000);
});
// On successful connection
db.once('open', function() {
  console.info('Mongoose connected to ' +
    db.host + ':' + db.port +
    '/' + db.name);
});

/*
 * Handles CTRL-C signal
 * Disconnect Mongoose when Node process terminates
 */
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.info('\nClosing mongoose connection');
    console.info('Terminating server');
    process.exit(0);
  });
});
