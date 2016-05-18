/* Routes for Users */

var router = require('express').Router();

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
  .get(userCtrl.getByEmail);

/* Error handler */
router.use(require('../services/errorHandler'));

module.exports = router;
