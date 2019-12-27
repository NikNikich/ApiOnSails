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
  'POST /api/user':                           { action: 'user/add-user.js' },
  'GET /api/user':                            { action: 'user/change-user.js' },
  'PUT /api/user/password:id':                { action: 'user/put-password.js' },
  'PUT /api/user/username:id':                { action: 'user/put-username.js' },
  'PUT /api/user/avatar:id':                  { action: 'user/put-avatar.js' },
  'GET /api/topic':                           { action: 'topic/get-topic.js' },
  'POST /api/topic':                          { action: 'topic/post-topic.js' },
  'DELETE /api/topic:id':                     { action: 'topic/delete-topic.js' },
  'PUT /api/topic:id':                        { action: 'topic/put-topic.js' },
  'GET /api/message':                         { action: 'topic/get-message.js' },
  'POST /api/message':                        { action: 'topic/post-message.js' },
  'DELETE /api/message:id':                   { action: 'topic/delete-message.js' },
  'PUT /api/message:id':                      { action: 'topic/put-message.js' },
  'POST /api/like:id':                        { action: 'like/post-like.js' },
  'DELETE /api/like:id':                      { action: 'like/delete-like.js' },
};
