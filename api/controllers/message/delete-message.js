module.exports = {


  friendlyName: 'Delete message',


  description: 'delete user Message',


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
    let delMessage=await Message.destroy({
      id: inputs.id,
      userId:inputs.userId,
    }).fetch();
    if(delMessage.length>0) {
      return {
        statusCode: 200,
        description:"Ok",
        deleteTopic:delMessage,
      };
    } else return {
      statusCode: 409,
      description:"Not found Message. Maybe you are not the owner",
    };

  }


};
