let supertest = require('supertest');

describe('UserController.add-user', function() {

  describe('POST /api/user', function() {
    it('should add new user', function (done) {
      supertest(sails.hooks.http.app)
        .post('/api/user')
        .send({ email: 'test@test1.com',username:'testik1', password: 'testik1' })
        .expect(200, done)
    });
  });
});
describe('UserController.verify-user', function() {
  describe('GET /api/user', function() {
    it('should verify user', function (done) {
      supertest(sails.hooks.http.app)
        .get('/api/user?email=test@test.com&password=testik')
        .expect(200, done)
    });
  });
});
describe('UserController.put-password', function() {

  describe('PUT /api/user/password/:id', function() {
    it('should change password user', function (done) {
      supertest(sails.hooks.http.app)
        .put('/api/user/password/5e0927e065fcf618b85a5701')
        .send({ password: 'testikPassPut' })
        .expect(200, done)
    });
  });
});
describe('UserController.put-username', function() {

  describe('PUT /api/user/username/:id', function() {
    it('should change username user', function (done) {
      supertest(sails.hooks.http.app)
        .put('/api/user/username/5e0927e065fcf618b85a5701')
        .send({ username: 'testikUsernamePut' })
        .expect(200, done)
    });
  });
});
