var express = require('express');

module.exports = function() {

  var router = express.Router();

  router.route('/users')
    // Returns all users
    .get(function(req, res) {
      Users.forge()
        .fetch()
        .then(function(collection) {
          res.json({ error: false, data: collection.toJSON() });
        })
        .catch(function(err) {
          res.status(500).json({ error: true, data: { message: err.message } });
        });
    })
    // Create user
    .post(function(req, res) {
      User.forge({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        })
        .save()
        .then(function(user) {
          res.json({ error: false, data: { id: user.get('id') } });
        })
        .catch(function(err) {
          res.status(500).json({ error: true, data: { message: err.message } });
        });
    });

  return router;
};
