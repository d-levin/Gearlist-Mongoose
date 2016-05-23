/* List Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: String,
  items: [{
    type: Schema.ObjectId,
    ref: 'Item',
    unique: true
  }, {
    quantity: Number,
    worn: Boolean
  }]
});

module.exports = mongoose.model('List', listSchema);
