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
var morgan = require('morgan');

/* https setup */
var fs = require('fs');
var https = require('https');
var http = require('http');
var https_options = {
  key: fs.readFileSync('./secrets/key.pem'),
  cert: fs.readFileSync('./secrets/key-cert.pem')
};

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('secure-port', 3001);

app.use(compression());
app.use(morgan('dev'));
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
app.use('/api/*', require('./services/errorHandler'));

// Unhandled exceptions
process.on('uncaughtException', function(err) {
  console.error('Something terrible happened:');
  console.error(err.stack);
  process.exit(1);
});

// /* Start the server * /
http_server = http.createServer(app).listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
https_server = https.createServer(https_options, app).listen(app.get('secure-port'), function() {
  console.log('Listening on port ' + app.get('secure-port'));
});

module.exports = app;
