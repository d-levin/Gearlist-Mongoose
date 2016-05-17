/* Routes for Users */

var router = require('express').Router();

// Include schemas
var User = require('../models/').user;

// Logic for routes handled in controller
var userCtrl = require('../controllers/user');

router.route('/')
  .get(userCtrl.get)
  .post(userCtrl.post);

router.route('/:userId')
  // Get User by ID
  .get(function(req, res) {
    User.findById(req.params.userId, function(err, user) {
      if (err) {
        return res.status(500).json({ error: true, data: { message: err } });
      }
      res.json({ error: false, data: user });
    });
  })
  // Update User by ID
  .put(function(req, res) {
    // Option param to return the updated object
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, function(err, user) {
      if (err) {
        return res.status(500).json({ error: true, data: { message: err } });
      }
      res.json({ error: false, data: user });
    });
  })
  // Delete User by ID
  .delete(function(req, res) {
    User.findByIdAndRemove(req.params.userId, function(err, user) {
      if (err) {
        return res.status(500).json({ error: true, data: { message: err } });
      }
      res.json({ error: false, data: user });
    });
  });

router.route('/username/:userEmail')
  // Get User by Email
  .get(function(req, res) {
    User.findOne({ email: req.params.userEmail }, function(err, user) {
      if (err) {
        return res.status(500).json({ error: true, data: { message: err } });
      }
      res.json({ error: false, data: user });
    });
  });

module.exports = router;
