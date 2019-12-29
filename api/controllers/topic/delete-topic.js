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
    let thisTopic=await Topic.find({
      where: { id: inputs.id,
        idUser:inputs.userId
      }
    });
    sails.log('topicowner',thisTopic);
    if(thisTopic.length<1) return {
      statusCode: 409,
      description: 'Not found Topic. Maybe you are not the owner',
    };
    let delTopic=await Topic.destroy({ id: inputs.id,}).fetch();
    if(delTopic) {
      return {
        statusCode: 200,
        description:"Ok",
        deleteTopic:delTopic,
      };
    } else return {
      statusCode: 409,
      description:"Not update",
    };
  }


};
