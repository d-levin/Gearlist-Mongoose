/* User Controller */

var User = require('../models/').user;

module.exports = {
  // Return all users
  get: function(req, res) {
    User.find(function(err, users) {
      if (err) {
        return res.status(500).json({ error: true, data: { message: err } });
      }
      res.json({ error: false, data: users });
    });
  },
  // Create a new user
  post: function(req, res) {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save(function(err) {
      if (err) {
        return res.status(500).json({ error: true, data: { message: err } });
      }
      res.json({ error: false, data: user });
    });
  }
};
