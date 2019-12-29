/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'POST /api/user':                            { action: 'user/add-user' },
  'GET /api/user':                             { action: 'user/change-user' },
  'PUT /api/user/password/:id':                { action: 'user/put-password' },
  'PUT /api/user/username/:id':                { action: 'user/put-username' },
  'PUT /api/user/avatar/:id':                  { action: 'user/put-avatar' },
  'GET /api/topic':                            { action: 'topic/get-topic' },
  'POST /api/topic':                           { action: 'topic/post-topic' },
  'DELETE /api/topic/:id':                     { action: 'topic/delete-topic' },
  'PUT /api/topic/:id':                        { action: 'topic/put-topic' },
  'GET /api/message':                          { action: 'message/get-message' },
  'POST /api/message':                         { action: 'message/post-message' },
  'DELETE /api/message/:id':                   { action: 'message/delete-message' },
  'PUT /api/message/:id':                      { action: 'message/put-message' },
  'POST /api/like/:messageId':                 { action: 'like/post-like' },
  'DELETE /api/like/:messageId':               { action: 'like/delete-like' },
};
