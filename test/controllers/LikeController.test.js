let supertest = require('supertest');

describe('LikeController.post-like', function() {

  describe('POST /api/like/:messageId', function() {
    it('should add user like', function (done) {
      supertest(sails.hooks.http.app)
        .post('/api/like/5e08c2c934dfd8168031460a')
        .send({ userId: '5e0927e065fcf618b85a5701'})
        .expect(200, done)
    });
  });
});
describe('LikeController.delete-like', function() {

  describe('DELETE /api/like/:messageId', function() {
    it('should delete user like', function (done) {
      supertest(sails.hooks.http.app)
        .delete('/api/like/5e08c2c934dfd8168031460a')
        .send({ userId: '5e0927e065fcf618b85a5701' })
        .expect(200, done)
    });
  });
});
