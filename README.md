# forum

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue Dec 24 2019 19:33:25 GMT+0300 (GMT+03:00) using Sails v1.2.3.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->
# Application Description
This is an implementation of a test task.
###API for a hypothetical mobile application
##functionals:
  ##POST /api/user:            
  New User Registration
  ###Parameters:    
  + email: type: 'string',
        required: true,
        unique: true,
        isEmail: true,
  + password:
        type: 'string',
        required: true,
        minLength:6,
  + username: 
        type: 'string',
        required: true,
        unique: true,
        minLength:4,
  ### Example:
     POST http://localhost:1337/api/user     
        send({ email: 'test@test1.com',username:'testik1', password: 'testik1' })     
  ##GET /api/user:   
  User authorization
  ###Parameters:    
  + email:type: 'string',
        required: true,
        isEmail: true,
  + password: type: 'string',
        required: true,
        minLength:6,
  ###Example:    
     GET http://localhost:1337/api/user?email=test@test.com&password=testik           
  ##PUT /api/user/password/:id:
  Password change (recovery)
  ###Parameters:   
   + id:  type: 'string',
        required: true,
   + password: type: 'string',
        required: true,
        minLength: 6,
   ###Example:
    PUT http://localhost:1337/api/user/password/5e0927e065fcf618b85a5701
           .send({ password: 'testikPassPut' })     
  ##PUT /api/user/username/:id: 
  Username change
  ###Parameters:
   + id:  type: 'string',
        required: true,
   + username: type: 'string',
        required: true,
        minLength:4,
  ###Example:
     PUT http://localhost:1337/api/user/username/5e0927e065fcf618b85a5701
          .send({ username: 'testikUsernamePut' })
  ##PUT /api/user/avatar/:id:  
  Upload avatars
  ###Parameters:
  + id:  type: 'string',
       required: true,
  + file: file
         required: true,
  ###Example:
     PUT http://localhost:1337/api/user/avatar/5e0927e065fcf618b85a5701
          .attach('file', 'custom/image/no.jpg')
  ##GET /api/topic:  
  Viewing the list of topics on the forum (with page loading of topics)
  ###Parameters: 
  + page: type: 'number',
        min:1,
  + limit:type: 'number',
        defaultsTo:10,
        min:1,
  ###Example:      
    GET http:/localhost:1337/api/topic     
  ##POST /api/topic:     
  Create new topic
  ###Parameters: 
  + userId:type: 'string',
        required: true,
  + name: type: 'string',
        required: true,
        minLength:4,
        maxLength:100,
  + description:type: 'string',
        minLength:4,
        maxLength:400,
  ###Example:  
     POST http:/localhost:1337/api/topic
         send({ userId: '5e0927e065fcf618b85a5701',name:'testikTop', description: 'testikdesc' })     
  ##DELETE /api/topic/:id: 
  Delete your topic
  ###Parameters: 
  + id: type: 'string',
        required: true,
  + userId:{
        type: 'string',
        required: true,
  ###Example:
      DELETE http:/localhost:1337/api/topic/5e093530b29ebc2350d980fd
        send({ userId: '5e0927e065fcf618b85a5701' })        
  ##PUT /api/topic/:id:
  Updating your theme
  ###Parameters: 
   + id:type: 'string',
        required: true,
   + userId:type: 'string',
        required: true,
   + name:type: 'string',
        required: true,
        minLength:4,
        maxLength:100,
   + description:type: 'string',
        minLength:4,
        maxLength:400,
  ###Example: 
     PUT http:/localhost:1337/api/topic/5e093530b29ebc2350d980fd
          send({ userId: '5e0927e065fcf618b85a5701',name:'testikTopPut', description: 'testikdescPut' })          
  ##GET /api/message:   
  Viewing messages in a topic (with pagination of messages)
  ###Parameters: 
  + page:type: 'number',
        min:1,
  + limit:type: 'number',
        defaultsTo:10,
        min:1,
  + topicId:type: 'string',
        required: true,
  ###Example: 
    GET http:/localhost:1337/api/message?topicId=5e0935f233cfb32180d41403          
  ##POST /api/message:     
  Creating new messages   
  ###Parameters: 
   + text:type: 'string',
        required: true,
        minLength:2,
   + userId:type: 'string',
        required: true,
   + topicId:type: 'string',
        required: true,
  ###Example:     
    POST http:/localhost:1337/api/message
          send({ userId: '5e0927e065fcf618b85a5701',text:'testikTextMess', topicId: '5e0935f233cfb32180d41403' })
  ##DELETE /api/message/:id: 
  Delete own messages  
  ###Parameters: 
   + id: type: 'string',
       required: true,
   + userId:type: 'string',
        required: true,
  ###Example: 
    DELETE http:/localhost:1337/api/message/5e093530b29ebc2350d980fd
          send({ userId: '5e0927e065fcf618b85a5701' })   
  ##PUT /api/message/:id: 
  Editing your own posts 
  ###Parameters: 
  + id:type: 'string',
     required: true,
  + userId:type: 'string',
        required: true,
  + text:type: 'string',
        required: true,
        minLength:2,
  ###Example: 
        PUT http:/localhost:1337/api/message/5e093530b29ebc2350d980fd'
              send({ userId: '5e0927e065fcf618b85a5701',text:'testikTextMessPut', description: 'testikdescPut' })
  ##POST /api/like/:messageId:  
  Put "like" message
  ###Parameters: 
   + userId:type: 'string',
        required: true,
   + messageId:type: 'string',
        required: true,
  ###Example:   
    POST http:/localhost:1337/api/like/5e08c2c934dfd8168031460a
          send({ userId: '5e0927e065fcf618b85a5701'})
  ##DELETE /api/like/:messageId:
  Remove "like" from the message
  ###Parameters: 
   + userId:type: 'string',
          required: true,
   + messageId:type: 'string',
          required: true,
  ###Example:   
     DELETE http:/localhost:1337/api/like/5e08c2c934dfd8168031460a
        send({ userId: '5e0927e065fcf618b85a5701' })
        
     
  + In order to run autotests, type in the command line
  
        mocha test/lifecycle.test.js test/controllers/*UourFile*.test.js
