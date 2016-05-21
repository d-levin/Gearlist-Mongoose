/* Global configuration file */

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';
var secrets = require('../secrets/');

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'Geartracker-dev'
    },
    port: process.env.port || 3000,
    db: {
      server: 'mongodb://' +
        secrets.db.development.user + ':' + secrets.db.development.password +
        '@ds019101.mlab.com:19101/ham-wip',
      options: {
        server: {
          poolSize: 10
        }
      }
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'Geartracker-test'
    },
    port: process.env.port || 3000,
    db: {
      server: 'mongodb://' +
        secrets.db.test.user + ':' + secrets.db.test.password +
        '@ds019101.mlab.com:19101/ham-wip',
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
    port: process.env.port || 8080,
    db: {
      server: 'mongodb://' +
        secrets.db.production.user + ':' + secrets.db.production.password +
        '@ds019101.mlab.com:19101/ham-wip',
      options: {
        server: {
          poolSize: 10
        }
      }
    }
  }
};

module.exports = config[env];
