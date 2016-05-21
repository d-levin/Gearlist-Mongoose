/* Category Controller */

var Category = require('../models/').category;

module.exports = {
  // Return all categories
  get: function(req, res, next) {
    Category.findAsync()
      .then(function(categories) {
        res.json({ error: false, data: categories });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Return one category by ID
  getById: function(req, res, next) {
    Category.findByIdAsync(req.params.id)
      .then(function(category) {
        res.json({ error: false, data: category });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Update one category by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    Category.findOneAndUpdateAsync({ _id: req.params.id }, req.body, { new: true })
      .then(function(category) {
        res.json({ error: false, data: category });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Create a new category
  post: function(req, res, next) {
    var category = new Category(req.body);
    category.saveAsync()
      .then(function() {
        res.json({ error: false, data: category });
      })
      .catch(function(err) {
        next(err);
      });
  },
  // Delete one category by ID
  deleteById: function(req, res, next) {
    Category.findByIdAndRemoveAsync({ _id: req.params.id })
      .then(function(category) {
        res.json({ error: false, data: category });
      })
      .catch(function(err) {
        next(err);
      });
  }
};
