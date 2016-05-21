/* Routes for Items */

var router = require('express').Router();

// Logic for routes handled in controller
var itemCtrl = require('../controllers/item');

router.route('/')
  .get(itemCtrl.get)
  .post(itemCtrl.post);

router.route('/:id')
  .get(itemCtrl.getById)
  .put(itemCtrl.updateById)
  .delete(itemCtrl.deleteById);

module.exports = router;
