/* Routes for Categories */

var router = require('express').Router();

// Logic for routes handled in controller
var categoryCtrl = require('../controllers/category');

router.route('/')
  .get(categoryCtrl.get)
  .post(categoryCtrl.post);

router.route('/:id')
  .get(categoryCtrl.getById)
  .put(categoryCtrl.updateById)
  .delete(categoryCtrl.deleteById);

module.exports = router;
