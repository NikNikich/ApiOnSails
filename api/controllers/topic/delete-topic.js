module.exports = {


  friendlyName: 'Delete topic',


  description: 'Delete user topic',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    userId:{
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let delTopic=await Topic.destroy({
      id: inputs.id,
      userId:inputs.userId,
    }).fetch();
    if(delTopic.length>0) {
      await Message.destroy({
        topicId:delTopic[0].id,
      });
      return {
        statusCode: 200,
        description:"Ok",
        deleteTopic:delTopic,
      };
    } else return {
      statusCode: 409,
      description:"Not found Topic. Maybe you are not the owner",
    };
  }


};
