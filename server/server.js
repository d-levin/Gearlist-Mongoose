var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var favicon = require('serve-favicon');
var helmet = require('helmet');
var serveStatic = require('serve-static');
var compression = require('compression');
var db = require('./services/database');

/* Dev dependencies */
var logger = require('morgan');

/* https setup */
// var fs = require('fs');
// var https = require('https');
// var https_options = {
//   key: fs.readFileSync('./tls/key.pem'),
//   cert: fs.readFileSync('./tls/cert.pem')
// };

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(serveStatic(path.join(__dirname, '/public')));

/* User authentication */
// var passport = require('passport');
// var passportLocal = require('passport-local');
// LocalStrategy = passportLocal.Strategy;
// app.use(express.session({ secret: 'SECRET' }));
// app.use(passport.initialize());
// app.use(passport.session());

/* Bring in the routes */
require('./routes/')(app);

/* Error handlers */
// User routes
app.use('/api/', require('./services/errorHandler'));

// Unhandled exceptions
process.on('uncaughtException', function(err) {
  console.error('Something terrible happened:');
  console.error(err.stack);
  process.exit(1);
});

/* https server setup */
// app.listen = function() {
//   var server = https.createServer(http_options, this);
//   return server.listen.apply(app.get('port'));
// };

/* Start the server */
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
