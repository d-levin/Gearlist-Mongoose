/* List Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  items: [{
    type: Schema.ObjectId,
    ref: 'Item',
    unique: true
  }]
});

module.exports = mongoose.model('List', listSchema);
