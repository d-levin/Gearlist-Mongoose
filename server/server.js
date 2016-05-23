/* Main entry point for project */

var app = require('./app');
var config = require('./config/config');

/* Start the server */
app.listen(config.port, function() {
  console.info('Listening on port ' + config.port);
});
