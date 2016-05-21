/* Routes for Lists */

var router = require('express').Router();

// Logic for routes handled in controller
var listCtrl = require('../controllers/list');

router.route('/')
  .get(listCtrl.get)
  .post(listCtrl.post);

router.route('/:id')
  .get(listCtrl.getById)
  .put(listCtrl.updateById)
  .delete(listCtrl.deleteById);

module.exports = router;
