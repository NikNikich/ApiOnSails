module.exports = {


  friendlyName: 'Put like',


  description: 'Put like',


  inputs: {
    userId: {
      type: 'string',
      required: true,
    },
    messageId: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let userLike=await User.findOne({id: inputs.userId});
    if(!userLike) return {
        statusCode: 409,
        description: 'User Not found',
      };
    let messageLike=await Message.findOne({id: inputs.messageId});
    if(!messageLike) return {
      statusCode: 409,
      description: 'Message Not found',
    };
    let thisMessage=await Like.find({
      where: {
        messageId: inputs.messageId,
        userId:inputs.userId
      }
    });
    if(thisMessage.length<1){
      let newLike = await Like.create({
        messageId: inputs.messageId,
        userId:inputs.userId
      }).fetch();
      if (newLike) {
        return {
          statusCode: 200,
          description: 'Like create',
          id: newLike.id,
        };
      } else return {
        statusCode: 409,
        description: 'Could not create Like. Check parameters',
      };

    } else return {
      statusCode: 409,
      description: 'This like already exists.',
    };

  }


};
