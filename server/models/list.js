/* List Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: String,
  items: [{ type: Schema.ObjectId, ref: 'Item', unique: true }, {
    quantity: Number,
    worn: Boolean
  }],
  _creator: { type: Schema.ObjectId, ref: 'User', required: true }
});

// A creator cannot have multiple lists with the same name
listSchema.index({ name: 1, _creator: 1 }, { unique: true });

module.exports = mongoose.model('List', listSchema);
