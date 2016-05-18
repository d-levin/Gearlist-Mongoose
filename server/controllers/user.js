/* User Controller */

var User = require('../models/').user;

module.exports = {
  // Return all users
  get: function(req, res, next) {
    User.findAsync()
      .then(function(users) {
        console.log('get');
        res.json({ error: false, data: users });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Return one user by ID
  getById: function(req, res, next) {
    User.findByIdAsync(req.params.userId)
      .then(function(user) {
        console.log('getById');
        res.json({ error: false, data: user });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Return one user by email
  getByEmail: function(req, res, next) {
    User.findOneAsync({ email: req.params.userEmail })
      .then(function(user) {
        // Avoid returning null value
        if (user) {
          console.log('getByEmail');
          res.json({ error: false, data: user });
        } else {
          next('User does not exist');
        }
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Update one user by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    User.findOneAndUpdateAsync({ _id: req.params.userId }, req.body, { new: true })
      .then(function(user) {
        // Avoid returning null value
        if (user) {
          res.json({ error: false, data: user });
        } else {
          console.log('updateById');
          next('User does not exist');
        }
      })
      .catch(function(err) {
        next(err);
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
        console.log('post');
        res.json({ error: false, data: user });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Delete one user by ID
  deleteById: function(req, res, next) {
    User.findOneAndRemoveAsync({ _id: req.params.userId })
      .then(function(user) {
        // Avoid returning null value
        if (user) {
          res.json({ error: false, data: user });
        } else {
          console.log('deleteById');
          next('User does not exist');
        }
      })
      .catch(function(err) {
        next(err);
      });
  }
};
