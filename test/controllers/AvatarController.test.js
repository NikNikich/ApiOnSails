let supertest = require('supertest');

describe('AvatarController.put-avatar', function() {

  describe('PUT /api/user/avatar/:id', function() {
    it('should change username user', function (done) {
      supertest(sails.hooks.http.app)
        .put('/api/user/avatar/5e0927e065fcf618b85a5701')
        .attach('file', 'custom/image/no.jpg')
        .expect(200, done)
    });
  });
});
