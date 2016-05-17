/* User Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  items: [{
    type: Schema.ObjectId,
    ref: 'Item',
    unique: true
  }],
  lists: [{
    type: Schema.ObjectId,
    ref: 'List',
    unique: true
  }],
  categories: [{
    type: Schema.ObjectId,
    ref: 'Category',
    unique: true
  }]
});

module.exports = mongoose.model('User', userSchema);
