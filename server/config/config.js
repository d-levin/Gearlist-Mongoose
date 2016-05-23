/* Global configuration file */

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'Geartracker-dev'
    },
    port: process.env.PORT || 3000,
    db: {
      server: 'mongodb://localhost/geartracker',
      options: {
        server: {
          poolSize: 10
        }
      }
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'Geartracker'
    },
    port: process.env.PORT || 3000,
    db: {
      server: 'mongodb://dbuser:dbpassword@ds019101.mlab.com:19101/ham-wip',
      options: {
        server: {
          poolSize: 10
        }
      }
    }
  }
};

module.exports = config[env];
