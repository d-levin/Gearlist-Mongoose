/* List Controller */

var List = require('../models/').list;

module.exports = {
  // Return all lists
  get: function(req, res, next) {
    List.find()
      .then(function(lists) {
        res.json({ error: false, data: lists });
      })
      .catch(next);
  },
  // Return one list by ID
  getById: function(req, res, next) {
    List.findById(req.params.id)
      .then(function(list) {
        res.json({ error: false, data: list });
      })
      .catch(next);
  },
  // Update one list by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    List.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(function(list) {
        res.json({ error: false, data: list });
      })
      .catch(next);
  },
  // Create a new list
  post: function(req, res, next) {
    var list = new List(req.body);
    list.save()
      .then(function() {
        res.json({ error: false, data: list });
      })
      .catch(next);
  },
  // Delete one list by ID
  deleteById: function(req, res, next) {
    List.findByIdAndRemove({ _id: req.params.id })
      .then(function(list) {
        res.json({ error: false, data: list });
      })
      .catch(next);
  }
};
