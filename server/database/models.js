var knex = require('knex');
var bookshelf = require('bookshelf')(knex);

module.exports = function() {
  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  var Item = bookshelf.Model.extend({
    tableName: 'items',
    user: function() {
      return this.belongsTo(User);
    }
  });
}
