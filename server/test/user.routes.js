var request = require('supertest');

var serverURL = 'http://localhost:' + require('../config/config').port;

describe('USER ROUTES', function() {
  var id = '';
  describe('Get all users: GET /users', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Create user: POST /users', function() {
    it('respond with json', function(done) {
      var user = {
        firstName: 'Mocha_firstName',
        lastName: 'Mocha_lastName',
        email: 'mocha@email.com',
        password: 'mochapassword'
      };
      request(serverURL)
        .post('/api/users')
        .send(user)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          id = res.body.data._id;
          done();
        });
    });
  });
  describe('Update user: PUT /users/:id', function() {
    it('respond with json', function(done) {
      var body = {
        firstName: 'Mocha_updated_firstName',
        lastName: 'Mocha_updated_lastName',
        email: 'mocha_updated@email.com',
        password: 'mochaupdatedpassword'
      };
      request(serverURL)
        .put('/api/users/' + id)
        .send(body)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Delete user: DELETE /users/:id', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .delete('/api/users/' + id)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});
