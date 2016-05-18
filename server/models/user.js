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

// Do initial password hashing here
userSchema.pre('save', function(next) {
  console.log('Hook on save');
  next();
});

// Do password validation here
userSchema.pre('findOneAndUpdate', function(next) {
  console.log('Hook on findOneAndUpdate');
  next();
});

module.exports = mongoose.model('User', userSchema);
