/* Error handler */

module.exports = function(err, req, res, next) {
  console.log('route errorhandler');
  return res.status(500).json({ error: true, data: { message: err } });
};
