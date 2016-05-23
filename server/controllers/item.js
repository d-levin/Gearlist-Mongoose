/* Item Controller */

var Item = require('../models/').item;
var User = require('../models/').user;

module.exports = {
  // Return all items
  get: function(req, res, next) {
    Item.find()
      .then(function(items) {
        res.json({ error: false, data: items });
      })
      .catch(next);
  },
  // Return one item by ID
  getById: function(req, res, next) {
    Item.findById(req.params.id)
      .then(function(item) {
        res.json({ error: false, data: item });
      })
      .catch(next);
  },
  // Update one item by ID
  updateById: function(req, res, next) {
    // Option param to return the updated object
    Item.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(function(item) {
        res.json({ error: false, data: item });
      })
      .catch(next);
  },
  // Create a new item
  post: function(req, res, next) {
    var item = new Item(req.body);
    item.save()
      .then(function() {
        return User.findById(req.body._creator);
      })
      .then(function(user) {
        // Ensure a valid user is found
        if (!user) {
          // Delete created item here
          // Is the item guaranteed to exist at this point?
          // Would the catch block have handled errors on item
          // creation, or is this running asynchronously?
          Item.findByIdAndRemove({ _id: item._id });
          next('Attempted to save item to non-existing user');
        }
        user.items.addToSet(item._id);
        // This can never fail? Because new item will
        // always have uniquely generated ID so can
        // never conflict with unique index in user model
        // Outer catch block seems to handle errors here
        user.save();
        return res.json({ error: false, data: item });
      })
      // Will also catch error if user not found
      .catch(next);
  },
  // Delete one item by ID
  deleteById: function(req, res, next) {
    Item.findByIdAndRemove({ _id: req.params.id })
      .then(function(item) {
        res.json({ error: false, data: item });
      })
      .catch(next);
  }
};
