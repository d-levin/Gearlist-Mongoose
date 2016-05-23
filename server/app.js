/* Setup and configure Express app */

/* Dependencies */
var express = require('express'),
  path = require('path');

// Middleware dependencies
var bodyParser = require('body-parser'),
  serveStatic = require('serve-static'),
  compression = require('compression'),
  serveFavicon = require('serve-favicon'),
  helmet = require('helmet'),
  morgan = require('morgan');

/* Configure and enable middlewares */
var app = express();
app.use(compression());
app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(serveFavicon(path.join(__dirname, '/public/favicon.ico')));
app.use(serveStatic(path.join(__dirname, '/public')));

/* Start the database */
require('./database');

/* Bring in the routes */
require('./routes/')(app);

/* Error handlers */
// For routes
app.use('/api/*', function(err, req, res, next) {
  console.info('Errorhandler for /api/ routes called');
  return res
    .status(err.status || 500)
    .json({ error: true, data: { message: err } });
});
// Unhandled exceptions
process.on('uncaughtException', function(err) {
  console.error('Something terrible happened:');
  console.error(err.stack);
  process.exit(1);
});

module.exports = app;
