/* Category Controller */

var Category = require('../models/').category;

module.exports = {
  // Return all categories
  get: function(req, res, next) {
    Category.find()
      .then(function(categories) {
        res.json({ error: false, data: categories });
      })
      .catch(next);
  },
  // Return one category by ID
  getById: function(req, res, next) {
    Category.findById(req.params.id)
      .then(function(category) {
        res.json({ error: false, data: category });
      })
      .catch(next);
  },
  // Update one category by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    Category.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(function(category) {
        res.json({ error: false, data: category });
      })
      .catch(next);
  },
  // Create a new category
  post: function(req, res, next) {
    var category = new Category(req.body);
    category.save()
      .then(function() {
        res.json({ error: false, data: category });
      })
      .catch(next);
  },
  // Delete one category by ID
  deleteById: function(req, res, next) {
    Category.findByIdAndRemove({ _id: req.params.id })
      .then(function(category) {
        res.json({ error: false, data: category });
      })
      .catch(next);
  }
};
