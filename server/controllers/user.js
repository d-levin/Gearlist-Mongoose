/* User Controller */

var User = require('../models/').user;

module.exports = {
  // Return all users
  get: function(req, res, next) {
    User.findAsync()
      .then(function(users) {
        res.json({ error: false, data: users });
      })
      .catch(next);
  },
  // Return one user by ID
  getById: function(req, res, next) {
    User.findByIdAsync(req.params.userId)
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Return one user by email
  getByEmail: function(req, res, next) {
    User.findOneAsync({ email: req.params.userEmail })
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Update one user by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    User.findByIdAndUpdateAsync(req.params.userId, req.body, { new: true })
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Create a new user
  post: function(req, res, next) {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.saveAsync()
      .then(function() {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Delete one user by ID
  deleteById: function(req, res, next) {
    User.findByIdAndRemoveAsync(req.params.userId)
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  }
};
