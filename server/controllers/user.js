/* User Controller */

var User = require('../models/').user;

module.exports = {
  // Return all users
  get: function(req, res) {
    User.findAsync()
      .then(function(users) {
        res.json({ error: false, data: users });
      })
      .catch(function(err) {
        return res.status(500).json({ error: true, data: { message: err } });
      });
  },
  // Return one user by ID
  getById: function(req, res) {
    User.findByIdAsync(req.params.userId)
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(function(err) {
        return res.status(500).json({ error: true, data: { message: err } });
      });
  },
  // Update one user by ID
  updateById: function(req, res) {
    // Option param to return the updated object
    User.findByIdAndUpdateAsync(req.params.userId, req.body, { new: true })
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(function(err) {
        return res.status(500).json({ error: true, data: { message: err } });
      });
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
      .catch(function(err) {
        return res.status(500).json({ error: true, data: { message: err } });
      });
  },
  // Delete one user by ID
  deleteById: function(req, res) {
    User.findByIdAndRemoveAsync(req.params.userId)
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(function(err) {
        return res.status(500).json({ error: true, data: { message: err } });
      });
  }
};
