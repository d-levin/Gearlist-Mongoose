var path = require('path');
var requireDirRoutes = require('require-dir')();
var changeCase = require('change-case');

module.exports = function(app) {

  /* App specific routes */
  // Requires all files in the current dir
  // Uses file name to set initial route path, converting camelCase
  // file names to paramCase e.g. userList to user-list
  Object.keys(requireDirRoutes).forEach(function(routeName) {
    app.use('/api/' + changeCase.paramCase(routeName), require('./' + routeName));
  });

  /* Route for home page */
  app.get('/', function(req, res) {
    var myRes = '<h2>THE SERVER IS RUNNING!</h2>';
    myRes += '<h2>REQ HEADERS</h2><p>' + JSON.stringify(req.headers) + '</p>';
    myRes += '<h2>REQ BODY</h2><p>' + JSON.stringify(req.body) + '</p>';
    res.status(200).send(myRes);
    // res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
  });

  /* Serve 404 for all undefined routes */
  app.get('/*', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
  });
};
