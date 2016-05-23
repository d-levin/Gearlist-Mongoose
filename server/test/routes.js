var request = require('supertest');

var serverURL = 'http://localhost:' + require('../config/config').port;

// Users
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

// Items
describe('ITEM ROUTES', function() {
  var id = '';
  describe('Get all items: GET /items', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .get('/api/items')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Create item: POST /items', function() {
    it('respond with json', function(done) {
      var item = {
        name: 'Mocha_name',
        description: 'Mocha_description',
        weight_oz: 99,
        image_url: 'http://imgurl.com/img.jpg'
      };
      request(serverURL)
        .post('/api/items')
        .send(item)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          id = res.body.data._id;
          done();
        });
    });
  });
  describe('Update item: PUT /items/:id', function() {
    it('respond with json', function(done) {
      var body = {
        firstName: 'Mocha_updated_firstName',
        lastName: 'Mocha_updated_lastName',
        email: 'mocha_updated@email.com',
        password: 'mochaupdatedpassword'
      };
      request(serverURL)
        .put('/api/items/' + id)
        .send(body)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Delete item: DELETE /items/:id', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .delete('/api/items/' + id)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});

// Lists
describe('LIST ROUTES', function() {
  var id = '';
  describe('Get all lists: GET /lists', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .get('/api/lists')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Create list: POST /lists', function() {
    it('respond with json', function(done) {
      var list = {
        name: 'Mocha_name',
        description: 'Mocha_description'
      };
      request(serverURL)
        .post('/api/lists')
        .send(list)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          id = res.body.data._id;
          done();
        });
    });
  });
  describe('Update list: PUT /lists/:id', function() {
    it('respond with json', function(done) {
      var body = {
        firstName: 'Mocha_updated_firstName',
        lastName: 'Mocha_updated_lastName',
        email: 'mocha_updated@email.com',
        password: 'mochaupdatedpassword'
      };
      request(serverURL)
        .put('/api/lists/' + id)
        .send(body)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Delete list: DELETE /lists/:id', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .delete('/api/lists/' + id)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});

// Categories
describe('CATEGORY ROUTES', function() {
  var id = '';
  describe('Get all categories: GET /categories', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Create category: POST /categories', function() {
    it('respond with json', function(done) {
      var category = {
        name: 'Mocha_name'
      };
      request(serverURL)
        .post('/api/categories')
        .send(category)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          id = res.body.data._id;
          done();
        });
    });
  });
  describe('Update category: PUT /categories/:id', function() {
    it('respond with json', function(done) {
      var body = {
        firstName: 'Mocha_updated_firstName',
        lastName: 'Mocha_updated_lastName',
        email: 'mocha_updated@email.com',
        password: 'mochaupdatedpassword'
      };
      request(serverURL)
        .put('/api/categories/' + id)
        .send(body)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Delete category: DELETE /categories/:id', function() {
    it('respond with json', function(done) {
      request(serverURL)
        .delete('/api/categories/' + id)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});
