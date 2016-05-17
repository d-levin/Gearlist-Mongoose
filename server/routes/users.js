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
  .get(userCtrl.getById)
  .put(userCtrl.updateById)
  .delete(userCtrl.deleteById);

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
