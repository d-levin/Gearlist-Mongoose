/* User Controller */

var User = require('../models/').user;

module.exports = {
  // Return all users
  get: function(req, res, next) {
    User.find()
      .then(function(users) {
        res.json({ error: false, data: users });
      })
      .catch(next);
  },
  // Return one user by ID
  getById: function(req, res, next) {
    User.findById(req.params.id)
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Return one user by email
  getByEmail: function(req, res, next) {
    User.findOne({ email: req.params.email })
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Return all lists referenced from user
  getLists: function(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate('lists')
      .exec()
      // Response object now has lists populated
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Return all categories referenced from user
  getCategories: function(req, res, next) {
    User.findOne({ _id: req.params.id })
      .populate('categories')
      .exec()
      // Response object now has categories populated
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Return all items referenced from user
  getItems: function(req, res, next) {
    User.findOne({ _id: req.params.id })
      .populate('items')
      .exec()
      // Response object now has items populated
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Update one user by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  },
  // Create a new user
  post: function(req, res, next) {
    var user = new User(req.body);
    user.save()
      .then(function() {
        res.status(201).json({ error: false, data: user });
      })
      .catch(next);
  },
  // Delete one user by ID
  // Should also delete all items/categories/lists
  // referenced from the deleted user
  deleteById: function(req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id })
      .then(function(user) {
        res.json({ error: false, data: user });
      })
      .catch(next);
  }
};
