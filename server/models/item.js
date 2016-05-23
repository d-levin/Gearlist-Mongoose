/* Item Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: String,
  weight_oz: Number,
  image_url: String,
  category: { type: Schema.ObjectId, ref: 'Category', unique: true }
});

module.exports = mongoose.model('Item', itemSchema);
