module.exports = {


  friendlyName: 'Post message',


  description: 'Add new message',


  inputs: {
    text: {
      type: 'string',
      required: true,
      minLength:2,
    },
    userId:{
      type: 'string',
      required: true,
    },
    topicId:{
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    let userMessage = await User.findOne({id: inputs.userId});
    if (!userMessage) return {
      statusCode: 409,
      description: 'User Not found',
    };
    let topicMessage = await Topic.findOne({id: inputs.topicId});
    if (!topicMessage) return {
      statusCode: 409,
      description: 'Topic Not found',
    };
    let newTopic = await Message.create({
      text:inputs.text,
      userId:inputs.userId,
      topicId:inputs.topicId,
    }).fetch();
    if (newTopic) {
      return {
        statusCode: 200,
        description: 'Message create',
        id: newTopic.id,
      };
    } else return {
      statusCode: 409,
      description: 'Could not create Message. Check parameters',
    };
  }
};
