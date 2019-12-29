module.exports = {


  friendlyName: 'Delete like',


  description: 'Delete like',


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
    let delLike=await Like.destroy({
      messageId: inputs.messageId,
      userId:inputs.userId,
    }).fetch();
    if(delLike.length>0) {
      return this.res.ok();
    } else return {
      statusCode: 409,
      description:"Not delete",
    };

  }


};
