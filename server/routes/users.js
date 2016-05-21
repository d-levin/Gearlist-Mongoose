/* Routes for Users */

var router = require('express').Router();

// Logic for routes handled in controller
var userCtrl = require('../controllers/user');

router.route('/')
  .get(userCtrl.get)
  .post(userCtrl.post);

router.route('/:id')
  .get(userCtrl.getById)
  .put(userCtrl.updateById)
  .delete(userCtrl.deleteById);

router.route('/:id/lists')
  .get(userCtrl.getLists);

router.route('/:id/categories')
  .get(userCtrl.getCategories);

router.route('/:id/items')
  .get(userCtrl.getItems);

router.route('/email/:email')
  .get(userCtrl.getByEmail);

module.exports = router;
