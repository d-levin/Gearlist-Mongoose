/* Item Controller */

var Item = require('../models/').item;

module.exports = {
  // Return all items
  get: function(req, res, next) {
    Item.findAsync()
      .then(function(items) {
        res.json({ error: false, data: items });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Return one item by ID
  getById: function(req, res, next) {
    Item.findByIdAsync(req.params.id)
      .then(function(item) {
        res.json({ error: false, data: item });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Update one item by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    Item.findOneAndUpdateAsync({ _id: req.params.id }, req.body, { new: true })
      .then(function(item) {
        res.json({ error: false, data: item });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Create a new item
  post: function(req, res, next) {
    var item = new Item(req.body);
    item.saveAsync()
      .then(function() {
        res.json({ error: false, data: item });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Delete one item by ID
  deleteById: function(req, res, next) {
    Item.findByIdAndRemoveAsync({ _id: req.params.id })
      .then(function(item) {
        res.json({ error: false, data: item });
      })
      .catch(function(err) {
        next(err);
      });
  }
};
