module.exports = {


  friendlyName: 'Put message',


  description: '',


  inputs: {
//id Message
    id: {
      type: 'string',
      required: true,
    },
    userId:{
      type: 'string',
      required: true,
    },
    text: {
      type: 'string',
      required: true,
      minLength:2,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let thisMessage=await Message.find({
      where: { id: inputs.id,
        userId:inputs.userId
      }
    });
    if(thisMessage.length<1) return {
      statusCode: 409,
      description: 'Not found Message. Maybe you are not the owner',
    };
    let updateMessage= await Message.updateOne({id:inputs.id})
      .set({text:inputs.text});
    if(updateMessage) {
      return this.res.ok();
    } else return {
      statusCode: 409,
      description:"Not update",
    };

  }


};
