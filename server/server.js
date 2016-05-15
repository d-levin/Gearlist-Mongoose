var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./database/bookshelf');

var server = express();
var port = process.env.PORT || 3000;
var router = express.Router();

/* Routes */
router.route('/users')
  // Returns all users
  .get(function(req, res) {
    Users.forge()
      .fetch()
      .then(function(collection) {
        res.json({ error: false, data: collection.toJSON() });
      })
      .catch(function(err) {
        res.status(500).json({ error: true, data: { message: err.message } });
      });
  })
  // Create user
  .post(function(req, res) {
    User.forge({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
      .save()
      .then(function(user) {
        res.json({ error: false, data: { id: user.get('id') } });
      })
      .catch(function(err) {
        res.status(500).json({ error: true, data: { message: err.message } });
      });
  });

/* Models */
var User = db.Model.extend({
  tableName: 'users',
  items: function() {
    return this.hasMany(Item);
  }
});

var Item = db.Model.extend({
  tableName: 'items',
  user: function() {
    return this.belongsTo(User);
  }
});

/* Collections */
var Users = db.Collection.extend({
  model: User
});

var Items = db.Collection.extend({
  model: Item
});

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '/public')));
server.use('/api', router);

/* Route for home page */
server.get('/', function(req, res) {
  var myRes = '<h2>THE SERVER IS RUNNING!</h2>';
  myRes += '<h2>REQ HEADERS</h2><p>' + JSON.stringify(req.headers) + '</p>';
  myRes += '<h2>REQ BODY</h2><p>' + JSON.stringify(req.body) + '</p>';
  res.send(myRes);
});

/* Serve 404 for all undefined routes */
server.get('/*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
});

/* Start the server */
server.listen(port, function() {
  console.log('Listening on port ' + port);
});
