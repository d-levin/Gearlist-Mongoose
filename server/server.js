var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var favicon = require('serve-favicon');
var helmet = require('helmet');
var db = require('./services/database');

var app = express();
var port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(express.static(path.join(__dirname, '/public')));

/* Bring in the routes */
require('./routes/')(app);

/* Start the server */
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
