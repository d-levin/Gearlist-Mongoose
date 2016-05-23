/* Category Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: { type: String, required: true, trim: true },
  _creator: { type: Schema.ObjectId, ref: 'User', required: true }
});

// A creator cannot have multiple categories with the same name
categorySchema.index({ name: 1, _creator: 1 }, { unique: true });

module.exports = mongoose.model('Category', categorySchema);
