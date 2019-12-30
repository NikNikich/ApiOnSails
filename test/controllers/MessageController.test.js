let supertest = require('supertest');

describe('MessageController.post-message', function() {

  describe('POST /api/message', function() {
    it('should add new message', function (done) {
      supertest(sails.hooks.http.app)
        .post('/api/message')
        .send({ userId: '5e0927e065fcf618b85a5701',text:'testikTextMess', topicId: '5e0935f233cfb32180d41403' })
        .expect(200, done)
    });
  });
});
describe('MessageController.get-message', function() {
  describe('GET /api/message', function() {
    it('should get message', function (done) {
      supertest(sails.hooks.http.app)
        .get('/api/message?topicId=5e0935f233cfb32180d41403')
        .expect(200, done)
    });
  });
});
describe('MessageController.put-message', function() {
  describe('PUT /api/message/:id', function() {
    it('should change user message', function (done) {
      supertest(sails.hooks.http.app)
        .put('/api/message/5e093530b29ebc2350d980fd')
        .send({ userId: '5e0927e065fcf618b85a5701',text:'testikTextMessPut', description: 'testikdescPut' })
        .expect(200, done)
    });
  });
});

describe('MessageController.delete-message', function() {

  describe('DELETE /api/message/:id', function() {
    it('should delete user message', function (done) {
      supertest(sails.hooks.http.app)
        .delete('/api/message/5e093530b29ebc2350d980fd')
        .send({ userId: '5e0927e065fcf618b85a5701' })
        .expect(200, done)
    });
  });
});
