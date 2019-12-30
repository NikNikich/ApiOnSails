/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
   /* _id: {
      type: 'string',
      required: true,
    },*/
    // example: carol.reyna@microsoft.com
    //description: The email address for this user.
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,

    },
    //description: Securely hashed representation of the user\'s login password.,
    //  example: 2$28a8eabna301089103-13948134nad
    password: {
      type: 'string',
      required: true,
      minLength:6,
    },
    //description: Full representation of the user\'s name,
    //example: Lisa Microwave van der Jenny
    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength:4,
    },
    //description: 'user avatar as a file path.',
    //example: 'myApp/.tmp/uploads/file.jpg'
    avatar: {
      type: 'string',
      defaultsTo:sails.config.custom.pathImage+'no.jpg',
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

   //========= I tried to use, but failed================
    //description: Likes this user
    /*userLikes: {
      collection: 'Like',
      via: 'ownerLike',
       },
    //description: Messages this user
    userMessages: {
      collection: 'Message',
      via: 'ownerMessage',
       },
    //description: Topics this user
    userTopics: {
      collection: 'Topic',
      via: 'ownerTopic',
      },*/
//========= I tried to use, but failed================
  },

};

