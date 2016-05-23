/* User Model */

var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },
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

userSchema.pre('save', function(next) {
  var user = this;

  // Only hash password if new or changed
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.pre('findOneAndUpdate', function(next) {
  console.info('Hook on findOneAndUpdate');
  next();
});

userSchema.methods = {
  generatePassword: function() {

  },
  comparePassword: function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) {
        return next(err);
      }
      next(null, isMatch);
    });
  },
  getLists: function() {
    console.info('getting lists');
  }
};

module.exports = mongoose.model('User', userSchema);
