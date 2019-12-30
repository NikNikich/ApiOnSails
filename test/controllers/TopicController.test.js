let supertest = require('supertest');

describe('TopicController.post-topic', function() {

  describe('POST /api/topic', function() {
    it('should add new topic', function (done) {
      supertest(sails.hooks.http.app)
        .post('/api/topic')
        .send({ userId: '5e0927e065fcf618b85a5701',name:'testikTop', description: 'testikdesc' })
        .expect(200, done)
    });
  });
});
describe('TopicController.get-topic', function() {
  describe('GET /api/topic', function() {
    it('should get topics', function (done) {
      supertest(sails.hooks.http.app)
        .get('/api/topic')
        .expect(200, done)
    });
  });
});
describe('TopicController.put-topic', function() {
  describe('PUT /api/topic/:id', function() {
    it('should change user topic', function (done) {
      supertest(sails.hooks.http.app)
        .put('/api/topic/5e093530b29ebc2350d980fd')
        .send({ userId: '5e0927e065fcf618b85a5701',name:'testikTopPut', description: 'testikdescPut' })
        .expect(200, done)
    });
  });
});

describe('TopicController.delete-topic', function() {

  describe('DELETE /api/topic/:id', function() {
    it('should delete user topic', function (done) {
      supertest(sails.hooks.http.app)
        .delete('/api/topic/5e093530b29ebc2350d980fd')
        .send({ userId: '5e0927e065fcf618b85a5701' })
        .expect(200, done)
    });
  });
});
