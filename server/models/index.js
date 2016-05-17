/* Model exports */

var requireDirModels = require('require-dir')();

// Requires all files in the current dir
Object.keys(requireDirModels).forEach(function(modelName) {
  module.exports[modelName] = require('./' + modelName);
});
