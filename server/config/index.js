/* Global configuration file */

module.exports = {
  db: {
    development: 'mongodb://localhost/geartracker',
    production: 'mongodb://dbuser:dbpassword@ds045465.mlab.com:45465/geartracker',
    options: {
      server: {
        poolSize: 10
      }
    }
  }
};
