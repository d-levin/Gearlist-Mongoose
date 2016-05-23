/* Item Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: String,
  weight_oz: Number,
  image_url: String,
  category: { type: Schema.ObjectId, ref: 'Category' },
  _creator: { type: Schema.ObjectId, ref: 'User', required: true }
});

// A creator cannot have multiple items with the same name
itemSchema.index({ name: 1, _creator: 1 }, { unique: true });

module.exports = mongoose.model('Item', itemSchema);
