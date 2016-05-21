/* List Controller */

var List = require('../models/').list;

module.exports = {
  // Return all lists
  get: function(req, res, next) {
    List.findAsync()
      .then(function(lists) {
        res.json({ error: false, data: lists });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Return one list by ID
  getById: function(req, res, next) {
    List.findByIdAsync(req.params.id)
      .then(function(list) {
        res.json({ error: false, data: list });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Update one list by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    List.findOneAndUpdateAsync({ _id: req.params.id }, req.body, { new: true })
      .then(function(list) {
        res.json({ error: false, data: list });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Create a new list
  post: function(req, res, next) {
    var list = new List(req.body);
    list.saveAsync()
      .then(function() {
        res.json({ error: false, data: list });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Delete one list by ID
  deleteById: function(req, res, next) {
    List.findByIdAndRemoveAsync({ _id: req.params.id })
      .then(function(list) {
        res.json({ error: false, data: list });
      })
      .catch(function(err) {
        next(err);
      });
  }
};
