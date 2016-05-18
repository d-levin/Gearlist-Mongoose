/* Global configuration file */

module.exports = {
  db: {
    development: 'mongodb://localhost:27017/geartracker',
    production: 'mongodb://dbuser:dbpassword@ds045465.mlab.com:45465/geartracker'
  }
};
